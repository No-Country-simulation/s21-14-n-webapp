using System.ComponentModel.DataAnnotations;

namespace UrbaniaBackend.Models;

public class ContactFormType
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(128)]
    [MinLength(4)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(32)]
    [MinLength(4)]
    public string Code { get; set; } = string.Empty;
    public bool Active { get; set; } = true;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
