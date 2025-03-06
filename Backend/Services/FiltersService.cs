using UrbaniaBackend.Data;
using UrbaniaBackend.Models;

namespace UrbaniaBackend.Services
{
	public class FiltersService
	{
		private readonly FiltersRepository _repository;

		public FiltersService( FiltersRepository repository )
		{
			_repository = repository;
		}

		public async Task<List<Inmuebles>> GetFilteredProperties( string? address, string? keyword )
		{
			return await _repository.GetFilteredProperties(address, keyword);
		}
	}

}
