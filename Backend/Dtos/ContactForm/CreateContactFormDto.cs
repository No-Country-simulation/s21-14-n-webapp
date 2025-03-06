using System.ComponentModel.DataAnnotations;

namespace UrbaniaBackend.Dtos.ContactForm;

public class CreateContactFormDto
{
    [Required]
    [MaxLength(64)]
    [MinLength(5)]
    public string ClientName { get; set; } = string.Empty;

    [MaxLength(16)]
    [MinLength(8)]
    public string? PhoneNumber { get; set; }

    [Required]
    [EmailAddress]
    [MaxLength(32)]
    public string ClientEmail { get; set; } = string.Empty;

    [Required]
    public int ContactFormTypeId { get; set; }
    public int? PropertyId { get; set; }
}
