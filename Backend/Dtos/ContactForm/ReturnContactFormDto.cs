using UrbaniaBackend.Dtos.ContactFormType;
using UrbaniaBackend.Models.Enums;

namespace UrbaniaBackend.Dtos.ContactForm;

public class ReturnContactFormAdminDto
{
    public int Id { get; set; }
    public string ClientName { get; set; } = string.Empty;
    public string? PhoneNumber { get; set; }
    public string ClientEmail { get; set; } = string.Empty;
    public ReturnContactTypeDto Type { get; set; } = default!;
    public string Status { get; set; } = default!;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
}
