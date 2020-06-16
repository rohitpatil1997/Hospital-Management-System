using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Hospital.Models;
using Microsoft.EntityFrameworkCore;

namespace Hospital.DAL
{
    public class PatientDal : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=ROHIT;Initial Catalog=PatientDB;Integrated Security=True");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PatientModel>().HasKey(p => p.id);
            modelBuilder.Entity<PatientModel>().Property(t => t.id).ValueGeneratedNever();
            //
            modelBuilder.Entity<PatientModel>()
                .ToTable("tblPatient");
            //Mapper.... //Mapping

            
        }

        public DbSet<PatientModel> PatientModels { get; set; }
    }
}
