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
    [Route("api/order")]
    public class OrderController : Controller
    {
        private IOrderRepository _orderRepository;

        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }
        [HttpGet, Route("")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<Order>))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Get()
        {
            var orders = await _orderRepository.GetOrdersAsync();
            return Ok(orders);
        }
        [HttpGet, Route("id/{id}")]//https://localhost:5000/api/product/id/22
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Order))]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public async Task<IActionResult> Get(int id)
        {
            var order = await _orderRepository.GetOrderByIdAsync(id);
            return Ok(order);
        }
        [HttpDelete, Route("{id}")]//https://localhost:5000/api/order/id/22
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(bool))]
        [ProducesResponseType(StatusCodes.Status404NotFound, Type = typeof(Order))]
        public async Task<IActionResult> Delete(int id)
        {
            bool flag = await _orderRepository.RemoveOrderAsync(id);
            if (flag)
            {
                return RedirectToAction("Get");
            }
            return NotFound();
        }
        [HttpPut, Route("")]//https://localhost:5000/api/product/id/22
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Order))]
        [ProducesResponseType(StatusCodes.Status406NotAcceptable, Type = typeof(Order))]
        public async Task<IActionResult> Put([FromBody] Order order)
        {
            var prod = await _orderRepository.SaveOrderAsync(order);
            return Ok(prod);
        }
        [HttpPost, Route("")]//https://localhost:5000/api/product/id/22
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Order))]
        [ProducesResponseType(StatusCodes.Status406NotAcceptable, Type = typeof(Order))]
        public async Task<IActionResult> Post([FromBody] Order order)
        {
            var ord = await _orderRepository.SaveOrderAsync(order);
            return Ok(ord);
        }
    }
}
