using System.ComponentModel.DataAnnotations;

namespace UrbaniaBackend.Dtos.User;

public class CreateUserDto
{
    [Required]
    [MaxLength(64)]
    [MinLength(2)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(64)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MaxLength(64)]
    [MinLength(6)]
    public string Password { get; set; } = string.Empty;
}
