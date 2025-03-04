using Microsoft.EntityFrameworkCore;
using UrbaniaBackend.Models;

namespace UrbaniaBackend.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Inmobiliaria> Inmobiliaria { get; set; }
        public DbSet<Inmuebles> Inmueble { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ContactFormType> ContactFormTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasIndex(u => u.Email).IsUnique();

            modelBuilder.Entity<ContactFormType>().HasIndex(u => u.Title).IsUnique();
            modelBuilder.Entity<ContactFormType>().HasIndex(u => u.Code).IsUnique();
        }
    }
}
