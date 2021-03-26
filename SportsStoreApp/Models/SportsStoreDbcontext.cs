using Microsoft.EntityFrameworkCore;
using SportsStoreApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreApp.Models
{
    public class SportsStoreDbcontext:DbContext
    {
        public SportsStoreDbcontext(DbContextOptions<SportsStoreDbcontext> dbContextOptions):base(dbContextOptions)
        {
                
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> orderDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<OrderDetail>().HasKey(od => new { od.OrderId, od.ProductId });
        }

    }
}
