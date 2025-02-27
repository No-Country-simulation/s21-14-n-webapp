using Microsoft.AspNetCore.Mvc;

using UrbaniaBackend.Dtos.Inmobiliaria;

[Route("api/[controller]")]
[ApiController]
public class InmobiliariaController : ControllerBase
{
	private readonly IInmobiliariaService _inmobiliariaService;

	public InmobiliariaController( IInmobiliariaService inmobiliariaService )
	{
		_inmobiliariaService = inmobiliariaService;
	}

	// 🔹 Obtener todas las inmobiliarias
	[HttpGet]
	public async Task<ActionResult<IEnumerable<InmobiliariaDto>>> GetAllAsync()
	{
		try
		{
			var inmobiliarias = await _inmobiliariaService.GetAllAsync();
			if (inmobiliarias == null || !inmobiliarias.Any())
			{
				return NotFound(new { message = "No hay inmobiliarias registradas." });
			}

			return Ok(inmobiliarias);
		}
		catch (Exception ex)
		{
			return StatusCode(500, new { message = "Error al obtener inmobiliarias.", error = ex.Message });
		}
	}

	// 🔹 Obtener inmobiliaria por ID
	[HttpGet("{id}")]
	public async Task<ActionResult<InmobiliariaDto>> GetByIdAsync( int id )
	{
		try
		{
			var inmobiliaria = await _inmobiliariaService.GetByIdAsync(id);
			if (inmobiliaria == null)
			{
				return NotFound(new { message = $"No se encontró la inmobiliaria con ID {id}." });
			}

			return Ok(inmobiliaria);
		}
		catch (Exception ex)
		{
			return StatusCode(500, new { message = "Error al obtener inmobiliaria.", error = ex.Message });
		}
	}

	// 🔹 Crear nueva inmobiliaria
	[HttpPost]
	public async Task<ActionResult<InmobiliariaDto>> CreateAsync( [FromBody] InmobiliariaDto inmobiliariaDto )
	{
		try
		{
			if (inmobiliariaDto == null)
			{
				return BadRequest(new { message = "Inmobiliaria no encontrada." });
			}

			var inmobiliaria = await _inmobiliariaService.CreateAsync(inmobiliariaDto);
			return Ok(inmobiliariaDto);
		}
		catch (Exception ex)
		{
			return StatusCode(500, new { message = "Error al crear inmobiliaria.", error = ex.Message });
		}
	}

	// 🔹 Actualizar inmobiliaria por ID
	[HttpPut("{id}")]
	public async Task<ActionResult<InmobiliariaDto>> UpdateAsync( int id, InmobiliariaDto inmobiliariaDto )
	{
		try
		{
			var updatedInmobiliaria = await _inmobiliariaService.UpdateAsync(id, inmobiliariaDto);
			if (updatedInmobiliaria == null)
			{
				return NotFound(new { message = $"No se encontró la inmobiliaria con ID {id} para actualizar." });
			}

			return Ok(updatedInmobiliaria);
		}
		catch (Exception ex)
		{
			return StatusCode(500, new { message = "Error al actualizar inmobiliaria.", error = ex.Message });
		}
	}

	// 🔹 Eliminar inmobiliaria por ID
	[HttpDelete("{id}")]
	public async Task<IActionResult> DeleteAsync( int id )
	{
		try
		{
			var deletedInmobiliaria = await _inmobiliariaService.DeleteAsync(id);
			if (!deletedInmobiliaria)
			{
				return NotFound(new { message = $"No se encontró la inmobiliaria con ID {id} para eliminar." });
			}

			return NoContent();
		}
		catch (Exception ex)
		{
			return StatusCode(500, new { message = "Error al eliminar inmobiliaria.", error = ex.Message });
		}
	}
}
