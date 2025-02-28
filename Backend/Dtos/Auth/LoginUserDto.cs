using System.ComponentModel.DataAnnotations;

namespace UrbaniaBackend.Dtos.Auth;

public class LoginUserDto
{
    [Required]
    [MaxLength(64)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    [MaxLength(64)]
    public string Password { get; set; } = string.Empty;
}
