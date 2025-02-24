using System.ComponentModel.DataAnnotations;

namespace UrbaniaBackend.Models;

public class User
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(64)]
    [MinLength(2)]
    public string Name { get; set; } = string.Empty;

    [Required]
    [MaxLength(64)]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MaxLength(256)]
    [MinLength(6)]
    public string Password { get; set; } = string.Empty;
    public bool Active { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }
}
