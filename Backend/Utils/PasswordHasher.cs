namespace UrbaniaBackend.Utils;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using UrbaniaBackend.Models;

public interface IPasswordHelper
{
    string HashPassword(User user, string password);
    bool VerifyPassword(User user, string hashedPassword, string password);
}

public class PasswordHelper(IPasswordHasher<User> _passwordHasher) : IPasswordHelper
{
    public string HashPassword(User user, string password)
    {
        return _passwordHasher.HashPassword(user, password);
    }

    public bool VerifyPassword(User user, string hashedPassword, string password)
    {
        var result = _passwordHasher.VerifyHashedPassword(user, hashedPassword, password);
        return result == PasswordVerificationResult.Success;
    }
}
