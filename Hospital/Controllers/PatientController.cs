using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Hospital.Models;
using Microsoft.AspNetCore.Cors;
using Hospital.DAL;
using System.ComponentModel.DataAnnotations;
using System.Net;

namespace Hospital.Controllers
{
    [EnableCors("AllowSpecificOrigins")]
    
    public class PatientController : Controller
    {
     //  static  List<PatientModel> patients = new List<PatientModel>();

     /*   public IActionResult Add()
        {
            return View("PatientAdd" , patients);
        }
        */



        public IActionResult Submit([FromBody] PatientModel obj)
        {
            //string name = Request.Form["PName"].ToString();
            // patients.Add(obj);
            // obj.id = 8;
            //create object of Context
            var context = new ValidationContext(obj,null,null);
            //fill the errors
            var result = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(obj, context, result, true);
        

            if (result.Count == 0)
            {
                PatientDal dal = new PatientDal();
                dal.Database.EnsureCreated();
                dal.Add(obj);  //Saves in Memory
                dal.SaveChanges(); // Physical Commit in SQL

                List<PatientModel> recs = dal.PatientModels.ToList<PatientModel>();

                return StatusCode(200, recs); //200 ( Success )
            }
            else
            {
                return StatusCode(500, result); // 500 Internal (Error  )

            }


            //return Json("PatientAdd", recs );
            //return Json(patients);
            //return Content("Patient Name is "+ obj.name +" the problem is "+ obj.problemDescription);

        }
        public IActionResult Update()
        {
            return View();
        }

        public IActionResult Delete()
        {
            return View();
        }
    }
 }