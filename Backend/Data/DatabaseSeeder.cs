namespace UrbaniaBackend.Data;

using Microsoft.AspNetCore.Identity;
using UrbaniaBackend.Context;
using UrbaniaBackend.Models;
using UrbaniaBackend.Utils.Inmueble;

public static class DbSeeder
{
    public static void Seed(AppDbContext context)
    {
        if (!context.Users.Any())
        {
            var passwordHasher = new PasswordHasher<User>();
            string hashedPassword = passwordHasher.HashPassword(new User(), "   ");

            context.Users.Add(
                new User
                {
                    Name = "Admin",
                    Email = "admin@example.com",
                    Password = hashedPassword,
                }
            );
            context.SaveChanges();
        }
    }

    private static void SeedInmobiliarias(AppDbContext context)
    {
        if (!context.Inmobiliarias.Any())
        {
            context.Inmobiliarias.AddRange(
                new Inmobiliaria
                {
                    Id = 1,
                    Name = "Inmobiliaria Central",
                    Address = "Calle Principal 123, Ciudad Capital",
                    Phone = "123-456-7890",
                    Email = "contacto@inmobiliariacentral.com"
                },
                new Inmobiliaria
                {
                    Id = 1,
                    Name = "Inmobiliaria del Sur",
                    Address = "Avenida del Sol 456, Ciudad del Sol",
                    Phone = "098-765-4321",
                    Email = "ventas@inmobiliariadelsur.com"
                }
            );
            context.SaveChanges();
        }
    }

    private static void SeedInmuebles(AppDbContext context)
    {
        if (!context.Inmueble.Any())
        {
            context.Inmueble.AddRange(
                new Inmuebles
                {
                    Tittle = "Casa en la playa",
                    Description = "Casa frente al mar salida a la playa",
                    Price = "500000",
                    Adress = "123 Calle Mar, Playa del Sol",
                    TypeEstate = EstateType.InProgress,
                    ImageUrl = "https://example.com/image1.jpg",
                    DatePublication = DateTime.UtcNow,
                    InmobiliariaId = 1
                },
                new Inmuebles
                {
                    Tittle = "Departamento en el centro",
                    Description = "Moderno departamento en el centro de la ciudad",
                    Price = "300000",
                    Adress = "456 Calle Centro, Ciudad Capital",
                    TypeEstate = EstateType.Available,
                    ImageUrl = "https://example.com/image2.jpg",
                    DatePublication = DateTime.UtcNow,
                    InmobiliariaId = 2
                }
            );
            context.SaveChanges();
        }
    }
}