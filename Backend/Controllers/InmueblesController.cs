using Microsoft.AspNetCore.Mvc;

using UrbaniaBackend.Dtos.Inmueble;
using UrbaniaBackend.Utils.Inmueble;

[Route("api/[controller]")]
[ApiController]
public class InmueblesController : ControllerBase
{
	private readonly IInmuebleService _inmueblesService;

	public InmueblesController( IInmuebleService inmueblesService )
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
	public async Task<ActionResult<InmueblesDto>> GetById( int id )
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
	public async Task<ActionResult<InmueblesDto>> Create( InmueblesDto inmuebleDto )
	{
		var createdInmueble = await _inmueblesService.CreateAsync(inmuebleDto);
		return CreatedAtAction(nameof(GetById), new { id = createdInmueble.Id }, createdInmueble);
	}

	[HttpPut("{id}")]
	public async Task<IActionResult> Update( int id, InmueblesDto inmuebleDto )
	{
		var updatedInmueble = await _inmueblesService.UpdateAsync(id, inmuebleDto);
		if (updatedInmueble == null)
		{
			return NotFound();
		}

		return NoContent();
	}

	[HttpDelete("{id}")]
	public async Task<IActionResult> Delete( int id )
	{
		var deleted = await _inmueblesService.DeleteAsync(id);
		if (!deleted)
		{
			return NotFound();
		}

		return NoContent();
	}

	[HttpGet("orderByPrice")]
	public async Task<ActionResult<List<InmuebleFilterPriceDto>>> OrderByPrice()
	{
		var result = await _inmueblesService.OrderByPrice();
		return Ok(result);
	}

	[HttpGet("orderBySquareMeters")]
	public async Task<ActionResult<List<InmuebleFilterSquareMetersDto>>> OrderBySquareMeters()
	{
		var result = await _inmueblesService.OrderBySquareMeters();
		return Ok(result);
	}
	[HttpGet("filter-by-type/{typeProperty}")]
	public async Task<ActionResult<List<InmuebleFilterTypeContractDto>>> GetByTypeProperty( TypeProperty typeProperty )
	{
		var result = await _inmueblesService.GetByTypePropertyAsync(typeProperty);

		if (result == null || result.Count == 0)
			return NotFound("No se encontraron inmuebles con el tipo especificado.");

		return Ok(result);
	}

	[HttpGet("filter-contract/{typeContract}")]
	public async Task<ActionResult<List<InmuebleFilterContractTypeDto>>> GetByContractType( TypeContract typeContract )
	{
		var inmueble = await _inmueblesService.GetByContractTypeAsync(typeContract);

		if (inmueble == null || inmueble.Count == 0)
		{
			return NotFound(new { message = "No se encontraron inmuebles con el tipo de contrato especificado." });
		}

		return Ok(inmueble);
	}

	[HttpGet("filter-address/{address}")]
	public async Task<ActionResult<List<InmuebleFilterAddressDto>>> GetByAddress( string address )
	{
		var inmueble = await _inmueblesService.GetByAddressAsync(address);

		if (inmueble == null || inmueble.Count == 0)
		{
			return NotFound(new { message = "No se encontraron inmuebles con la direccion especificada." });
		}

		return Ok(inmueble);
	}

	[HttpGet("by-keywords/{keywords}")]
	public async Task<ActionResult<List<InmuebleFilterKeyWordsDto>>> GetByKeywords( string keywords )
	{
		var inmuebles = await _inmueblesService.GetByKeywordsAsync(keywords);

		if (inmuebles == null || inmuebles.Count == 0)
		{
			return NotFound(new { message = "No se encontraron inmuebles con las palabras clave especificadas." });
		}

		return Ok(inmuebles);
	}

}