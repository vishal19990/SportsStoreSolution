using SportsStoreApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreApp.Models.Abstract
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetOrdersAsync();
        Task<Order> GetOrderByIdAsync(int orderId);
        Task<bool> RemoveOrderAsync(int orderId);
        Task<Order> SaveOrderAsync(Order order);

    }
}
