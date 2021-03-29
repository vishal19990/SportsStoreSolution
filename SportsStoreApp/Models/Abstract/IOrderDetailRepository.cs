using SportsStoreApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreApp.Models.Abstract
{
    public interface IOrderDetailRepository
    {
        Task<IEnumerable<OrderDetail>> GetOrderDetailsAsync();

        Task<IEnumerable<OrderDetail>> GetOrderDetailByIdAsync(int orderId);
        Task<bool> RemoveOrderDetailAsync(int orderId);
        Task<OrderDetail> AddOrderDetailAsync(OrderDetail orderDetail);
        Task<OrderDetail> UpdateOrderDetailAsync(OrderDetail orderDetail);

    }
}
