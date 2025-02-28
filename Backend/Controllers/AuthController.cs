using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UrbaniaBackend.Dtos.Auth;
using UrbaniaBackend.Services;
using UrbaniaBackend.Utils;

namespace UrbaniaBackend.Controllers;

[ApiController]
[Route("api/auth")]
public class AuthController(IAuthService _authService) : ControllerBase
{
    [HttpPost("login")]
    [ProducesResponseType<AuthUserResponseDto>(StatusCodes.Status200OK)]
    public async Task<ActionResult<AuthUserResponseDto>> Login([FromBody] LoginUserDto dto)
    {
        try
        {
            AuthUserResponseDto authUser = await _authService.LoginUser(dto);
            return Ok(authUser);
        }
        catch (Exception ex)
        {
            return Unauthorized(new { message = ex.Message });
        }
    }

    [Authorize]
    [HttpGet("renew")]
    public async Task<ActionResult<string>> RenewToken()
    {
        try
        {
            var userId = User.GetUserId();
            if (userId == null)
                return Unauthorized(new { message = "Invalid token" });
            string token = await _authService.RenewToken(userId.Value);
            return Ok(new { token });
        }
        catch (Exception ex)
        {
            return Unauthorized(new { message = ex.Message });
        }
    }
}
