using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using UrbaniaBackend.Models.Enums;

namespace UrbaniaBackend.Models;

public class ContactForm
{
    [Key]
    public int Id { get; set; }

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
    [ForeignKey("ContactFormType")]
    public int ContactFormTypeId { get; set; }
    public ContactFormType Type { get; set; } = default!;
    public int? PropertyId { get; set; }
    public ContactFormStatus Status { get; set; } = ContactFormStatus.Pending;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
