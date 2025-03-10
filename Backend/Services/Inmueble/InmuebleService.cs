using Microsoft.EntityFrameworkCore;

using UrbaniaBackend.Context;
using UrbaniaBackend.Dtos.Inmueble;
using UrbaniaBackend.Models;
using UrbaniaBackend.Utils.Inmueble;



public class InmueblesService : IInmuebleService
{
	private readonly AppDbContext _context;

	public InmueblesService( AppDbContext context )
	{
		_context = context;
	}

	public async Task<IEnumerable<InmueblesDto>> GetAllAsync()
	{
		return await _context.Inmueble
				.AsNoTracking()
				.Select(inmueble => new InmueblesDto
				{
					Id = inmueble.Id,
					Title = inmueble.Title,
					Description = inmueble.Description,
					Price = inmueble.Price,
					Address = inmueble.Address,
					SquareMeters = inmueble.SquareMeters,
					TypeProperty = inmueble.TypeProperty,
					TypeContract = inmueble.TypeContract,
					ImageUrl = inmueble.ImageUrl,
					DatePublication = inmueble.DatePublication,
					InmobiliariaId = inmueble.InmobiliariaId
				}).ToListAsync();
	}


	public async Task<InmueblesDto?> GetByIdAsync( int id )
	{
		var Inmuebles = await _context.Inmueble
			.AsNoTracking()
			.FirstOrDefaultAsync(i => i.Id == id);
		return Inmuebles is null ? null : new InmueblesDto
		{
			Id = Inmuebles.Id,
			Title = Inmuebles.Title,
			Description = Inmuebles.Description,
			Price = Inmuebles.Price,
			Address = Inmuebles.Address,
			SquareMeters = Inmuebles.SquareMeters,
			TypeProperty = Inmuebles.TypeProperty,
			TypeContract = Inmuebles.TypeContract,
			ImageUrl = Inmuebles.ImageUrl,
			DatePublication = Inmuebles.DatePublication,
			InmobiliariaId = Inmuebles.InmobiliariaId
		};

	}

	public async Task<InmueblesDto> CreateAsync( InmueblesDto inmuebleDto )
	{
		try
		{
			var inmueble = new Inmuebles
			{
				Title = inmuebleDto.Title,
				Description = inmuebleDto.Description,
				Price = inmuebleDto.Price,
				Address = inmuebleDto.Address,
				SquareMeters = inmuebleDto.SquareMeters,
				TypeProperty = inmuebleDto.TypeProperty,
				TypeContract = inmuebleDto.TypeContract,
				ImageUrl = inmuebleDto.ImageUrl,
				DatePublication = inmuebleDto.DatePublication,
				InmobiliariaId = inmuebleDto.InmobiliariaId

			};

			_context.Inmueble.Add(inmueble);
			await _context.SaveChangesAsync();

			return new InmueblesDto
			{
				Id = inmueble.Id,
				Title = inmueble.Title,
				Address = inmueble.Address,
				Description = inmueble.Description,
				Price = inmueble.Price,
				SquareMeters = inmueble.SquareMeters,
				TypeProperty = inmueble.TypeProperty,
				TypeContract = inmueble.TypeContract,
				ImageUrl = inmueble.ImageUrl,
				DatePublication = inmueble.DatePublication,
				InmobiliariaId = inmueble.InmobiliariaId
			};
		}
		catch (Exception ex)
		{
			throw new ApplicationException($"An error occurred while creating the property Inmuebles. Details: {ex.Message}", ex);
		}
	}

	public async Task<InmueblesDto> UpdateAsync( int id, InmueblesDto inmuebleDto )
	{
		try
		{
			ValidateInmuebleDto(inmuebleDto);

			var inmueble = await _context.Inmueble.FindAsync(id);
			if (inmueble == null)
			{
				return null;
			}

			inmueble.Title = inmuebleDto.Title;
			inmueble.Description = inmuebleDto.Description;
			inmueble.Price = inmuebleDto.Price;
			inmueble.Address = inmuebleDto.Address;
			inmueble.SquareMeters = inmuebleDto.SquareMeters;
			inmueble.TypeProperty = inmuebleDto.TypeProperty;
			inmueble.TypeContract = inmuebleDto.TypeContract;
			inmueble.ImageUrl = inmuebleDto.ImageUrl;
			inmueble.DatePublication = inmuebleDto.DatePublication;
			inmueble.InmobiliariaId = inmuebleDto.InmobiliariaId;

			await _context.SaveChangesAsync();
			return inmuebleDto;
		}
		catch (Exception ex)
		{
			throw new ApplicationException($"An error occurred while updating the property with ID {id}. Details: {ex.Message}", ex);
		}
	}

	public async Task<bool> DeleteAsync( int id )
	{
		try
		{
			// Buscar el inmueble por ID
			var inmueble = await _context.Inmueble.FindAsync(id);
			if (inmueble == null)
			{
				return false;
			}

			// Eliminar el inmueble de la base de datos
			_context.Inmueble.Remove(inmueble);
			await _context.SaveChangesAsync();
			return true;
		}
		catch (Exception ex)
		{
			throw new ApplicationException($"An error occurred while deleting the property with ID {id}. Details: {ex.Message}", ex);
		}
	}

	public async Task<List<InmuebleFilterPriceDto>> OrderByPrice()
	{
		return await _context.Inmueble
			.OrderByDescending(i => i.Price)
			.Select(i => new InmuebleFilterPriceDto
			{
				Id = i.Id,
				Price = i.Price,
			})
			.ToListAsync();
	}

	public async Task<List<InmuebleFilterSquareMetersDto>> OrderBySquareMeters()
	{
		return await _context.Inmueble
			.OrderByDescending(i => i.SquareMeters)
			.Select(i => new InmuebleFilterSquareMetersDto
			{
				Id = i.Id,
				SquareMeters = i.SquareMeters
			})
			.ToListAsync();
	}
	public async Task<List<InmuebleFilterTypeContractDto>> GetByTypePropertyAsync( TypeProperty typeProperty )
	{
		return await _context.Inmueble
			.Where(i => i.TypeProperty == typeProperty)
			.Select(i => new InmuebleFilterTypeContractDto
			{
				Id = i.Id,
				Title = i.Title,
				TypeProperty = i.TypeProperty
			})
			.ToListAsync();
	}

	// filtar por tipo de contrato
	public async Task<List<InmuebleFilterContractTypeDto>> GetByContractTypeAsync( TypeContract typeContract )
	{
		return await _context.Inmueble
			.Where(i => i.TypeContract == typeContract)
			.Select(i => new InmuebleFilterContractTypeDto
			{
				Id = i.Id,
				Title = i.Title,
				TypeContract = i.TypeContract
			})
			.ToListAsync();
	}

	// filtrar por direccion
	public async Task<List<InmuebleFilterAddressDto>> GetByAddressAsync( string address )
	{
		return await _context.Inmueble
			.Where(i => i.Address == address)
			.Select(i => new InmuebleFilterAddressDto
			{
				Id = i.Id,
				Title = i.Title,
				Address = i.Address
			}).ToListAsync();
	}

	// busqueda por palabras claves
	public async Task<List<InmuebleFilterKeyWordsDto>> GetByKeywordsAsync( string keywords )
	{
		if (string.IsNullOrWhiteSpace(keywords))
			return new List<InmuebleFilterKeyWordsDto>();

		var keywordList = keywords
			.ToLower()
			.Split(" ", StringSplitOptions.RemoveEmptyEntries);

		return await _context.Inmueble
			.Where(i => keywordList.Any(k => i.Title.ToLower().Contains(k) || i.Description.ToLower().Contains(k)))
			.Select(i => new InmuebleFilterKeyWordsDto
			{
				Id = i.Id,
				Title = i.Title,
				Description = i.Description
			})
			.ToListAsync();
	}

	#region Private Methods

	private void ValidateInmuebleDto( InmueblesDto inmuebleDto )
	{
		if (string.IsNullOrWhiteSpace(inmuebleDto.Title))
		{
			throw new ArgumentException("Title is required.");
		}
		if (string.IsNullOrWhiteSpace(inmuebleDto.Description))
		{
			throw new ArgumentException("Description is required.");
		}
		if (string.IsNullOrWhiteSpace(inmuebleDto.Price))
		{
			throw new ArgumentException("Price is required.");
		}
		if (string.IsNullOrWhiteSpace(inmuebleDto.Address))
		{
			throw new ArgumentException("Address is required.");
		}
		if (inmuebleDto.SquareMeters <= 0)
		{
			throw new ArgumentException("SquareMeters must be greater than zero.");
		}
		if (!Enum.IsDefined(typeof(TypeProperty), inmuebleDto.TypeProperty))
		{
			throw new ArgumentException("Invalid TypeProperty value.");
		}
		if (!Enum.IsDefined(typeof(TypeContract), inmuebleDto.TypeContract))
		{
			throw new ArgumentException("Invalid TypeContract value.");
		}
		if (string.IsNullOrWhiteSpace(inmuebleDto.ImageUrl))
		{
			throw new ArgumentException("ImageUrl is required.");
		}
		if (inmuebleDto.DatePublication == default)
		{
			throw new ArgumentException("DatePublication is required.");
		}
		if (inmuebleDto.InmobiliariaId <= 0)
		{
			throw new ArgumentException("InmobiliariaId must be greater than zero.");
		}
	}

	#endregion
}