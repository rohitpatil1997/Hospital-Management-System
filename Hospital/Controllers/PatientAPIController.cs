using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Hospital.DAL;
using Hospital.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Hospital.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PatientAPIController : ControllerBase
    {
        // GET: api/PatientAPI
       

        // GET: api/PatientAPI/5
        [HttpGet]
        public IActionResult Get(string patientName)
        {
            PatientDal dal = new PatientDal();
            List<PatientModel> search = (from temp in dal.PatientModels
                                         where temp.name == patientName
                                         select temp)
                                         .ToList<PatientModel>();
            return Ok(search);
        }

        // POST: api/PatientAPI
        [HttpPost]
        public IActionResult Post(PatientModel obj)
        {
            var context = new ValidationContext(obj, null, null);
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
        }

        // PUT: api/PatientAPI/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
