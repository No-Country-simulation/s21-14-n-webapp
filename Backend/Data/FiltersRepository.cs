using Microsoft.EntityFrameworkCore;

using UrbaniaBackend.Context;
using UrbaniaBackend.Models;

namespace UrbaniaBackend.Data
{
	public class FiltersRepository
	{
		private readonly AppDbContext _context;

		public FiltersRepository( AppDbContext context )
		{
			_context = context;
		}

		public async Task<List<Inmuebles>> GetFilteredProperties( string? address, string? keyword )
		{
			var query = _context.Inmueble.AsQueryable();

			if (!string.IsNullOrEmpty(address))
			{
				query = query.Where(p => p.Adress.Contains(address));
			}

			if (!string.IsNullOrEmpty(keyword))
			{
				query = query.Where(p => p.Tittle.Contains(keyword) || p.Description.Contains(keyword));
			}

			return await query.ToListAsync();
		}
	}

}
