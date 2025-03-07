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
        public DbSet<ContactFormType> ContactFormType { get; set; }
        public DbSet<ContactForm> ContactForm { get; set; }
        public DbSet<EstateImage> EstateImage { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasIndex(u => u.Email).IsUnique();

            modelBuilder.Entity<ContactFormType>().HasIndex(u => u.Title).IsUnique();
            modelBuilder.Entity<ContactFormType>().HasIndex(u => u.Code).IsUnique();

            modelBuilder
                .Entity<ContactForm>()
                .HasOne(p => p.Type)
                .WithMany(i => i.ContactForms)
                .HasForeignKey(p => p.ContactFormTypeId);

            modelBuilder.Entity<EstateImage>().HasIndex(pi => new { pi.Id, pi.Order }).IsUnique();

            modelBuilder
                .Entity<Inmuebles>()
                .HasMany(i => i.Images)
                .WithOne(img => img.Inmueble)
                .HasForeignKey(img => img.InmuebleId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
