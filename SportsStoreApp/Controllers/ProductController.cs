using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SportsStoreApp.Models.Abstract;
using SportsStoreApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreApp.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/product")]
    public class ProductController : Controller
    {
        private IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }
        [HttpGet,Route("")]
        [ProducesResponseType(StatusCodes.Status200OK,Type=typeof(IEnumerable<Product>))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
       public async Task<IActionResult> Get()
        {
            var products = await _productRepository.GetProductsAsync();
            return Ok(products);
        }
        [HttpGet, Route("id/{id}")]//https://localhost:5000/api/product/id/22
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Product))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Get(int id)
        {
            var products = await _productRepository.GetProductByIdAsync(id);
            return Ok(products);

        }
        [HttpGet, Route("category/{category}")]//https://localhost:5000/api/product/id/22
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Product>))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Get(string  category)
        {
            var products = await _productRepository.GetProductsByCategoryAsync(category);
            return Ok(products);
        }
        [HttpPost, Route("category/{category}")]//https://localhost:5000/api/product/id/22
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Product))]
        [ProducesResponseType(StatusCodes.Status406NotAcceptable,Type=typeof(Product))]
        public async Task<IActionResult> Post([FromBody] Product product)
        {
            var products = await _productRepository.AddProductAsync(product);
            return Ok(products);
        }
    }
}
