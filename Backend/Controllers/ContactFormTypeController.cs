using Microsoft.AspNetCore.Mvc;
using UrbaniaBackend.Dtos.ContactFormType;
using UrbaniaBackend.Models;
using UrbaniaBackend.Services.ContactFormTypeS;

namespace UrbaniaBackend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactFormTypeController(ContactFormTypeService _service) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<IEnumerable<ReturnContactTypeDto[]>>> GetAllc()
    {
        IEnumerable<ReturnContactTypeDto> list = await _service.GetAllCached();
        return Ok(list);
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<ContactFormType>> Post([FromBody] CreateContactTypeDto dto)
    {
        await _service.SaveNew(dto);
        return Ok("Creado exitosamente");
    }

    [HttpPatch("{typeId}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public async Task<ActionResult<ReturnContactTypeDto>> Update(
        [FromRoute] int typeId,
        [FromBody] UpdateContactTypeDto dto
    )
    {
        return await _service.Update(typeId, dto);
    }
}
