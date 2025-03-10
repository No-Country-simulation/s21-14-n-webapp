using UrbaniaBackend.Models.Enums;

namespace UrbaniaBackend.Dtos.ContactForm;

public class SelectContactFormDto
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Type { get; set; }
    public ContactFormStatus Status { get; set; }
    public DateTime? ToDate { get; set; }
}
