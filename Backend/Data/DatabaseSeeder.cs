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
    }
}
