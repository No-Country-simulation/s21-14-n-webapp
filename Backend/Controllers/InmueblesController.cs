using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using UrbaniaBackend.Dtos.Inmueble;

[Route("api/[controller]")]
[ApiController]
public class InmueblesController : ControllerBase
{
    private readonly IInmuebleService _inmueblesService;

    public InmueblesController(IInmuebleService inmueblesService)
    {
        _inmueblesService = inmueblesService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<InmueblesDto>>> GetAllAsync()
    {
        try
        {
            var inmuebles = await _inmueblesService.GetAllAsync();
            if (inmuebles == null || !inmuebles.Any())
            {
                return NotFound
                    (new { message = "No hay inmuebles registrados " });
            }

            return Ok(inmuebles);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error al obtener inmuebles.", error = ex.Message });
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<InmueblesDto>> GetById(int id)
    {
        try
        {
            var inmuebles = await _inmueblesService.GetByIdAsync(id);
            if (inmuebles == null)
            {
                return NotFound(new { message = $"No se encontró la inmuebles con ID {id}." });
            }

            return Ok(inmuebles);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "Error al obtener inmuebles.", error = ex.Message });
        }
    }

    [HttpPost]
    public async Task<ActionResult<InmueblesDto>> Create(InmueblesDto inmuebleDto)
    {
        var createdInmueble = await _inmueblesService.CreateAsync(inmuebleDto);
        return CreatedAtAction(nameof(GetById), new { id = createdInmueble.Id }, createdInmueble);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, InmueblesDto inmuebleDto)
    {
        var updatedInmueble = await _inmueblesService.UpdateAsync(id, inmuebleDto);
        if (updatedInmueble == null)
        {
            return NotFound();
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var deleted = await _inmueblesService.DeleteAsync(id);
        if (!deleted)
        {
            return NotFound();
        }

        return NoContent();
    }
}