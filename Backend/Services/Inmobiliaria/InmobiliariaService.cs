using Microsoft.EntityFrameworkCore;

using UrbaniaBackend.Context;
using UrbaniaBackend.Dtos.Inmobiliaria;
using UrbaniaBackend.Models;

public class InmobiliariaService : IInmobiliariaService
{
	private readonly AppDbContext _context;

	public InmobiliariaService( AppDbContext context )
	{
		_context = context;
	}

	// 🔹 Obtener todas las inmobiliarias
	public async Task<IEnumerable<InmobiliariaDto>> GetAllAsync()
	{
		return await _context.Inmobiliaria
			.AsNoTracking()
			.Select(inmobiliaria => new InmobiliariaDto
			{
				Id = inmobiliaria.Id,
				Name = inmobiliaria.Name,
				Address = inmobiliaria.Address,
				Phone = inmobiliaria.Phone,
				Email = inmobiliaria.Email
			}).ToListAsync();
	}

	// 🔹 Obtener una inmobiliaria por ID
	public async Task<InmobiliariaDto?> GetByIdAsync( int id )
	{
		var inmobiliaria = await _context.Inmobiliaria
            .AsNoTracking()
			.FirstOrDefaultAsync(i => i.Id == id);

		return inmobiliaria is null ? null : new InmobiliariaDto
		{
			Id = inmobiliaria.Id,
			Name = inmobiliaria.Name,
			Address = inmobiliaria.Address,
			Phone = inmobiliaria.Phone,
			Email = inmobiliaria.Email
		};
	}

	// 🔹 Crear una nueva inmobiliaria
	public async Task<InmobiliariaDto> CreateAsync( InmobiliariaDto inmobiliariaDto )
	{
		var inmobiliaria = new Inmobiliaria
		{
			Name = inmobiliariaDto.Name,
			Address = inmobiliariaDto.Address,
			Phone = inmobiliariaDto.Phone,
			Email = inmobiliariaDto.Email
		};

		_context.Inmobiliaria.Add(inmobiliaria);
		await _context.SaveChangesAsync();

		return new InmobiliariaDto
		{
			Id = inmobiliaria.Id,
			Name = inmobiliaria.Name,
			Address = inmobiliaria.Address,
			Phone = inmobiliaria.Phone,
			Email = inmobiliaria.Email
		};
	}

	// 🔹 Actualizar inmobiliaria
	public async Task<InmobiliariaDto> UpdateAsync( int id, InmobiliariaDto inmobiliariaDto )
	{
		var inmobiliaria = await _context.Inmobiliaria.FindAsync(id);
		if (inmobiliaria == null)
		{
			return null;
		}

		inmobiliaria.Name = inmobiliariaDto.Name;
		inmobiliaria.Address = inmobiliariaDto.Address;
		inmobiliaria.Phone = inmobiliariaDto.Phone;
		inmobiliaria.Email = inmobiliariaDto.Email;

		_context.Inmobiliaria.Update(inmobiliaria);
		await _context.SaveChangesAsync();

		return new InmobiliariaDto
		{
			Id = inmobiliaria.Id,
			Name = inmobiliaria.Name,
			Address = inmobiliaria.Address,
			Phone = inmobiliaria.Phone,
			Email = inmobiliaria.Email
		};
	}

	// 🔹 Eliminar inmobiliaria por ID
	public async Task<bool> DeleteAsync( int id )
	{
		var inmobiliaria = await _context.Inmobiliaria.FindAsync(id);
		if (inmobiliaria == null)
		{
			return false;
		}

		_context.Inmobiliaria.Remove(inmobiliaria);
		await _context.SaveChangesAsync();
		return true;
	}
}
