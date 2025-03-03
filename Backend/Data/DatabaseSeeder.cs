namespace UrbaniaBackend.Data;

using Microsoft.AspNetCore.Identity;
using UrbaniaBackend.Context;
using UrbaniaBackend.Models;

public static class DbSeeder
{
    public static void Seed(AppDbContext context)
    {
        if (!context.Users.Any())
        {
            var passwordHasher = new PasswordHasher<User>();
            string hashedPassword = passwordHasher.HashPassword(new User(), "12345678");

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

        if (!context.ContactFormTypes.Any())
        {
            context.ContactFormTypes.Add(
                new ContactFormType
                {
                    Code = "get_property",
                    Title = "Quiero adquirir/rentar un inmueble",
                }
            );
            context.ContactFormTypes.Add(
                new ContactFormType { Code = "get_more_info", Title = "Quiero más información" }
            );
            context.ContactFormTypes.Add(
                new ContactFormType
                {
                    Code = "get_visit",
                    Title = "Quiero solicitar una visita a la propiedad",
                }
            );
            context.ContactFormTypes.Add(
                new ContactFormType
                {
                    Code = "sell_property",
                    Title = "Quiero vender/alquilar un inmueble",
                }
            );
            context.SaveChanges();
        }
    }
}
