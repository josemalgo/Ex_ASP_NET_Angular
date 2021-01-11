using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EmployeesProj.Domain.Models
{
    public class Employee : Entity
    {
        public string Name { get; set; }

        public string Surname { get; set; }

        public string Position { get; set; }

        public decimal Salary { get; set; }
    }
}
