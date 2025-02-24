using Microsoft.EntityFrameworkCore;
using UrbaniaBackend.Context;
using UrbaniaBackend.Dtos.User;
using UrbaniaBackend.Models;
using UrbaniaBackend.Utils;

namespace UrbaniaBackend.Services;

public interface IUserService
{
    Task<User> CreateUser(CreateUserDto dto);
    Task<User?> FindUserByEmail(string userEmial);
    Task<User?> FindUserById(int userId);
}

public class UserService(AppDbContext _context, IPasswordHelper _passwordHasher) : IUserService
{
    public async Task<User> CreateUser(CreateUserDto dto)
    {
        try
        {
            User newUser = new()
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = dto.Password,
            };

            newUser.Password = _passwordHasher.HashPassword(newUser, newUser.Password);

            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return newUser;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<User?> FindUserByEmail(string userMail)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Email == userMail);
    }

    public async Task<User?> FindUserById(int userId)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Id == userId);
    }
}
