using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Models
{
    public class PatientModel
    {
        //[Key]
        public int id { get; set; }

        [Required]
        [RegularExpression("^[a-z]{1,10}$")]
        public string name { get; set; }

        [Required]
        public string problemDescription { get; set; }

    }
}
