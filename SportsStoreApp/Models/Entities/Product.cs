﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreApp.Models.Entities
{
    public class Product
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProductId { get; set; }
        [Required,StringLength(maximumLength:150,MinimumLength =4)]
        public string ProductName { get; set; }
        [Required, StringLength(maximumLength: 150, MinimumLength = 4)]

        public string Description { get; set; }
        [Required, Column(TypeName ="decimal(18,2)")]
        public decimal Price { get; set; }
        [Required, StringLength(maximumLength: 150, MinimumLength = 4)]
        public string Category { get; set; }




    }
}
