using SportsStoreApp.Models.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SportsStoreApp.Models.Entities;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace SportsStoreApp.Models.Concrete
{
    public class EFProductRepository : IProductRepository
    {
        private SportsStoreDbcontext _context;
        private ILogger<EFProductRepository> _logger;

        public EFProductRepository(SportsStoreDbcontext sportsStoreDbcontext,ILogger<EFProductRepository> logger)
        {
            _context = sportsStoreDbcontext;
            _logger = logger;
        }
        public async Task<Product> AddProductAsync(Product product)
        {
          await  _context.Products.AddAsync(product);
            var recEffected = await _context.SaveChangesAsync();
            if(recEffected==1)
            {
                _logger.LogInformation($"EfProductRepository .add product async ,new product{product.ProductName},added successfully");
                return product;
            }
            return null;
        }

        public async Task<bool> DeleteProductAsync(int productId)
        {
            var product = await GetProductByIdAsync(productId);
            _context.Products.Remove(product);
            var recEffected = await _context.SaveChangesAsync();
            if (recEffected == 1)
            {
                _logger.LogInformation($"EfProductRepository.deleteproductasync, add product  ,new product{product.ProductId},deleted successfully");
                return true;
            }
            return false;
        }

        public async Task<Product> GetProductByIdAsync(int productId) => await _context.Products.FindAsync(productId);

        public async Task<IEnumerable<Product>> GetProductsAsync() => await _context.Products.ToListAsync();


        public async Task<IEnumerable<Product>> GetProductsByCategoryAsync(string category) => await _context.Products.Where(p => p.Category == category).ToListAsync();
        

        public async Task<Product> UpdateProductAsync(Product product)
        {
            _context.Entry<Product>(product).State = EntityState.Modified;
            var recEffected = await _context.SaveChangesAsync();
            if(recEffected==1)
            {
                _logger.LogInformation($"EfProductRepository.Updatedproductasync, product with productidt{product.ProductId},Updated successfully");
            }
            return product;
        }
    }
}
