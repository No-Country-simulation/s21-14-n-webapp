using System.ComponentModel.DataAnnotations;

namespace UrbaniaBackend.Dtos.ContactFormType;

public class CreateContactTypeDto
{
    [Required]
    [MinLength(4)]
    public string Code { get; set; } = string.Empty;

    [Required]
    [MinLength(4)]
    public string Title { get; set; } = string.Empty;
}
