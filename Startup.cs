using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.HttpOverrides;

namespace NewWebSite
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute("Index", "index",
                    new { controller = "Start", action = "Index" });

                routes.MapRoute("Vvedenie", "vvedenie",
                    new { controller = "Start", action = "Vvedenie" });

                routes.MapRoute("Canvas", "canvas",
                    new { controller = "Start", action = "Canvas" });

                routes.MapRoute("Life", "life",
                    new { controller = "Start", action = "Life" });

                routes.MapRoute("HeadHunter", "headhunter",
                    new { controller = "Start", action = "HeadHunter" });

                routes.MapRoute("ContactUs", "contactus",
                    new { controller = "Start", action = "ContactUs" });


                routes.MapRoute(
                    name: "default",
                    template: "{controller=Start}/{action=Index}/{id?}");
            });
        }
    }
}
