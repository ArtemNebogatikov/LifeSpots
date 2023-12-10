using System.Text;

namespace LifeSpots
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                // ������� ����������� ������
                endpoints.MapCss();
                endpoints.MapJs();
                endpoints.MapHtml();
                endpoints.MapImage();
            });
        }
    }
}