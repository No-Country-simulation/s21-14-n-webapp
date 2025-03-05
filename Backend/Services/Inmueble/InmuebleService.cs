using Microsoft.EntityFrameworkCore;
using UrbaniaBackend.Context;
using UrbaniaBackend.Dtos.Inmueble;
using UrbaniaBackend.Models;
using UrbaniaBackend.Services.Inmueble;

public class InmueblesService : IInmuebleService
{
    private readonly AppDbContext _context;

    public InmueblesService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<InmueblesDto>> GetAllAsync()
    {
        return await _context.Inmueble.Select(inmueble => new InmueblesDto
        {
            Id = inmueble.Id,
            Tittle = inmueble.Tittle,
            Description = inmueble.Description,
            Price = inmueble.Price,
            Adress = inmueble.Adress,
            TypeEstate = inmueble.TypeEstate,
            ImageUrl = inmueble.ImageUrl,
            DatePublication = inmueble.DatePublication,
            InmobiliariaId = inmueble.InmobiliariaId
        }).ToListAsync();
    }


    public async Task<InmueblesDto> GetByIdAsync(int id)
    {
        var inmueble = await _context.Inmueble.FindAsync(id);
        if (inmueble == null)
        {
            return null;
        }

        return new InmueblesDto
        {
            Id = inmueble.Id,
            Tittle = inmueble.Tittle,
            Description = inmueble.Description,
            Price = inmueble.Price,
            Adress = inmueble.Adress,
            TypeEstate = inmueble.TypeEstate,
            ImageUrl = inmueble.ImageUrl,
            DatePublication = inmueble.DatePublication,
            InmobiliariaId = inmueble.InmobiliariaId
        };
    }

    public async Task<InmueblesDto> CreateAsync(InmueblesDto inmuebleDto)
    {
        var inmueble = new Inmuebles
        {
            Tittle = inmuebleDto.Tittle,
            Description = inmuebleDto.Description,
            Price = inmuebleDto.Price,
            Adress = inmuebleDto.Adress,
            TypeEstate = inmuebleDto.TypeEstate,
            ImageUrl = inmuebleDto.ImageUrl,
            DatePublication = inmuebleDto.DatePublication,
            InmobiliariaId = inmuebleDto.InmobiliariaId
        };

        _context.Inmueble.Add(inmueble);
        await _context.SaveChangesAsync();

        inmuebleDto.Id = inmueble.Id;
        return inmuebleDto;
    }

    public async Task<InmueblesDto> UpdateAsync(int id, InmueblesDto inmuebleDto)
    {
        var inmueble = await _context.Inmueble.FindAsync(id);
        if (inmueble == null)
        {
            return null;
        }

        inmueble.Tittle = inmuebleDto.Tittle;
        inmueble.Description = inmuebleDto.Description;
        inmueble.Price = inmuebleDto.Price;
        inmueble.Adress = inmuebleDto.Adress;
        inmueble.TypeEstate = inmuebleDto.TypeEstate;
        inmueble.ImageUrl = inmuebleDto.ImageUrl;
        inmueble.DatePublication = inmuebleDto.DatePublication;
        inmueble.InmobiliariaId = inmuebleDto.InmobiliariaId;

        await _context.SaveChangesAsync();
        return inmuebleDto;
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var inmueble = await _context.Inmueble.FindAsync(id);
        if (inmueble == null)
        {
            return false;
        }

        _context.Inmueble.Remove(inmueble);
        await _context.SaveChangesAsync();
        return true;
    }
}