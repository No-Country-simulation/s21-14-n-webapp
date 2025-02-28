using Mapster;
using UrbaniaBackend.Dtos.Auth;
using UrbaniaBackend.Dtos.User;
using UrbaniaBackend.Models;
using UrbaniaBackend.Utils;

namespace UrbaniaBackend.Services;

public interface IAuthService
{
    Task<AuthUserResponseDto> RegisterUser(CreateUserDto dto);
    Task<AuthUserResponseDto> LoginUser(LoginUserDto dto);
    Task<string> RenewToken(int userId);
}

public class AuthService(
    IUserService _service,
    IPasswordHelper _passwordHasher,
    IJwtService _jwtService
) : IAuthService
{
    public async Task<AuthUserResponseDto> RegisterUser(CreateUserDto dto)
    {
        try
        {
            User user = await _service.CreateUser(dto);
            var authUserDto = user.Adapt<AuthUserResponseDto>();
            authUserDto.Token = _jwtService.GenerateToken(user);
            return authUserDto;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<AuthUserResponseDto> LoginUser(LoginUserDto dto)
    {
        try
        {
            User? user = await _service.FindUserByEmail(dto.Email);
            _ = user ?? throw new Exception("Email o contraseña incorrectos");

            bool isPasswordValid = _passwordHasher.VerifyPassword(
                user,
                user.Password,
                dto.Password
            );
            if (!isPasswordValid)
            {
                throw new Exception("Email o contraseña incorrectos");
            }

            string token = _jwtService.GenerateToken(user);
            var authUserDto = user.Adapt<AuthUserResponseDto>();
            authUserDto.Token = token;

            return authUserDto;
        }
        catch (Exception)
        {
            throw;
        }
    }

    public async Task<string> RenewToken(int userId)
    {
        try
        {
            User? user = await _service.FindUserById(userId);
            _ = user ?? throw new Exception("Unauthorized");
            string token = _jwtService.GenerateToken(user);
            return token;
        }
        catch (System.Exception)
        {
            throw;
        }
    }
}
