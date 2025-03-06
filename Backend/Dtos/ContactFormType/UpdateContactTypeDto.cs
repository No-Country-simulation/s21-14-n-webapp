using System.ComponentModel.DataAnnotations;

namespace UrbaniaBackend.Dtos.ContactFormType;

public class UpdateContactTypeDto
{
    [MinLength(4)]
    public string? Code { get; set; }

    [MinLength(4)]
    public string? Title { get; set; }
    public bool? Active { get; set; }
}
