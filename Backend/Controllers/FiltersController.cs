using Microsoft.AspNetCore.Mvc;

using UrbaniaBackend.Services;

namespace UrbaniaBackend.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FiltersController : ControllerBase
	{
		private readonly FiltersService _service;

		public FiltersController( FiltersService service )
		{
			_service = service;
		}

		[HttpGet("filter")]
		public async Task<IActionResult> GetFilteredProperties( [FromQuery] string? address, [FromQuery] string? keyword )
		{
			var properties = await _service.GetFilteredProperties(address, keyword);
			return Ok(properties);
		}
	}
}
