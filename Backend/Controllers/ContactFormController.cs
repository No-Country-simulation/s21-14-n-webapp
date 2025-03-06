using Microsoft.AspNetCore.Mvc;
using UrbaniaBackend.Dtos.ContactForm;
using UrbaniaBackend.Models;
using UrbaniaBackend.Services.ContactFormService;

namespace UrbaniaBackend.Controllers;

[ApiController]
[Route("/api/contact-form")]
public class ContactFormController(IContactFormService _service) : ControllerBase
{
    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<ContactForm>> Create([FromBody] CreateContactFormDto dto)
    {
        try
        {
            await _service.CreateContactForm(dto);
            return Created();
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet]
    public async Task<IEnumerable<ReturnContactFormAdminDto>> GetAll()
    {
        return await _service.GetAll();
    }

    [HttpPatch("/${contactFormId}/status")]
    public async Task<ReturnContactFormAdminDto> UpdateStatus(
        [FromRoute] int contactFormId,
        [FromBody] UpdateContactFormStatusDto dto
    )
    {
        return await _service.UpdateStatus(contactFormId, dto);
    }
}
