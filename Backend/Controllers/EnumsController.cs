using Microsoft.AspNetCore.Mvc;
using UrbaniaBackend.Models.Enums;

namespace UrbaniaBackend.Controllers;

[ApiController]
[Route("api/enums")]
public class EnumsController : ControllerBase
{
    [HttpGet("contact-form-status")]
    public IActionResult GetContactFormStatuses()
    {
        var statuses = Enum.GetValues(typeof(ContactFormStatus))
            .Cast<ContactFormStatus>()
            .Select(e => new { Id = (int)e, Name = e.ToString() })
            .ToList();

        return Ok(statuses);
    }
}
