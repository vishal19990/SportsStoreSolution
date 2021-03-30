using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SportsStoreApp.Models;
using SportsStoreApp.Models.Abstract;
using SportsStoreApp.Models.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportsStoreApp
{
    public class Startup

    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddDbContext<SportsStoreDbcontext>(cfg =>
            {
                cfg.UseSqlServer(Configuration["ConnectionStrings:SportsStoreConnection"], sqlServerOptionsAction: sqlOptions =>
                  {
                      sqlOptions.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(30), errorNumbersToAdd: null);
                  });
                cfg.UseLoggerFactory(LoggerFactory.Create(cfg => { cfg.AddConsole(); })).EnableSensitiveDataLogging();
            });
            services.AddScoped<IProductRepository, EFProductRepository>();
            services.AddScoped<IOrderRepository, EFOrderRepository>();
            services.AddScoped<IOrderDetailRepository, EFOrderDetailRepository>();
            services.AddSwaggerGen(cfg =>
            {
                cfg.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "SportsStore", Version = "v1" });
            });
            services.AddSpaStaticFiles(cfg => { cfg.RootPath = "ClientApp/dist"; }


            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup> logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseSwagger();
            app.UseSwaggerUI(cfg =>
            {
                cfg.SwaggerEndpoint("/swagger/v1/swagger.json", "SportsStore v1");
            });

            using (var scope = app.ApplicationServices.CreateScope())
            {
                SportsStoreDbcontext context = scope.ServiceProvider.GetRequiredService<SportsStoreDbcontext>();
                var createDatabase = context.Database.EnsureCreated();
                if (createDatabase)
                {
                    SportsStoreSeedData.PopulateSportsStore(context);
                    logger.LogInformation($"Sportsseeddata called{context.Products.Count()} --Products addded\n {context.Orders.Count()}--order is added\n{context.orderDetails.Count()}--odertail added");
                }
            }
            app.UseRouting();
            app.UseEndpoints(ConfigureRoutes);

            app.UseSpa(cfg =>
            {
                cfg.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                {
                    cfg.UseAngularCliServer(npmScript: "start");
                }
            }


            );

        }

        private void ConfigureRoutes(IEndpointRouteBuilder routeBuilder)
        {
            routeBuilder.MapControllers();
            routeBuilder.MapGet("/", async context =>
            {
                await context.Response.WriteAsync($"<h1>Sports  store site under construction !</h1>"
                    +$" click here for *** <a type='button' href='/index.html'/>Click here</a>"
                    
                    );
            });
        }
    }
}
