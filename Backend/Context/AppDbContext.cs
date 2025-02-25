using Microsoft.EntityFrameworkCore;
using UrbaniaBackend.Models;

namespace UrbaniaBackend.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Inmobiliaria> Inmobiliarias { get; set; }
        public DbSet<Inmuebles> Inmueble { get; set; }

    }
}
