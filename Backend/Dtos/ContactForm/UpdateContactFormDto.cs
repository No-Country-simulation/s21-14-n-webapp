using System.ComponentModel.DataAnnotations;
using UrbaniaBackend.Models.Enums;

namespace UrbaniaBackend.Dtos.ContactForm;

public class UpdateContactFormStatusDto
{
    [Required]
    public ContactFormStatus Status { get; set; }
}
