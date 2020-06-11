using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Hospital.Models;
using Microsoft.AspNetCore.Cors;

namespace Hospital.Controllers
{
    [EnableCors("MyAllowSpecificOrigins")]
    
    public class PatientController : Controller
    {
       static  List<PatientModel> patients = new List<PatientModel>();
        public IActionResult Add()
        {
            return View("PatientAdd" , patients);
        }
        public IActionResult Submit([FromBody] PatientModel obj)
        {
            //string name = Request.Form["PName"].ToString();
            patients.Add(obj);
            return View("PatientAdd", patients);
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