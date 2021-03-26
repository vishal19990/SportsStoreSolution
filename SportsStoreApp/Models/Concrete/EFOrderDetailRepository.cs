using Microsoft.EntityFrameworkCore;
using SportsStoreApp.Models.Abstract;
using SportsStoreApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreApp.Models.Concrete
{
    public class EFOrderDetailRepository : IOrderDetailRepository
    {
        private SportsStoreDbcontext _context;

        public EFOrderDetailRepository(SportsStoreDbcontext sportsStoreDbcontext)
        {
            _context = sportsStoreDbcontext;
        }
        public async  Task<OrderDetail> AddOrderDetailAsync(OrderDetail orderDetail)
        {
            await _context.orderDetails.AddAsync(orderDetail);
            var recEffected = await _context.SaveChangesAsync();
            if (recEffected == 1)
            {
                
                return orderDetail;
            }
            return null;
        }
        public async Task<IEnumerable<OrderDetail>> GetOrderDetailAsync(int orderId) => await _context.orderDetails.Where(o => o.OrderId == orderId).ToListAsync();


        public async Task<IEnumerable<OrderDetail>> GetOrderDetailsAsync()=>await _context.orderDetails.ToListAsync();

        
        public async Task<bool> RemoveOrderDetailAsync(int orderId)
        {
            var orderdetail = await _context.orderDetails.FindAsync(orderId);
            _context.orderDetails.Remove(orderdetail);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<OrderDetail> UpdateOrderDetailAsync(OrderDetail orderDetail)
        {
            _context.Entry<OrderDetail>(orderDetail).State = EntityState.Modified;
           await _context.SaveChangesAsync();
            return orderDetail;
        }
    }
}
