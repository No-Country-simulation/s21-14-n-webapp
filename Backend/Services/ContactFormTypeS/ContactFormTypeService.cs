using Mapster;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using UrbaniaBackend.Context;
using UrbaniaBackend.Dtos.ContactFormType;
using UrbaniaBackend.Models;

namespace UrbaniaBackend.Services.ContactFormTypeS;

public class ContactFormTypeService(AppDbContext _context, IMemoryCache _cache)
    : IContactFormTypeService
{
    private readonly string CacheKey = "ContactFormType";

    private async Task<ContactFormType> GetByIdOrThrow(int typeId)
    {
        ContactFormType? cf = await _context.ContactFormType.FirstOrDefaultAsync(t =>
            t.Id == typeId
        );
        if (cf is null)
        {
            throw new InvalidOperationException();
        }
        return cf;
    }

    private async Task<List<ContactFormType>> GetAllActive()
    {
        var items = await _context
            .ContactFormType.AsNoTracking()
            .Where(c => c.Active)
            .ToListAsync();
        return items;
    }

    private async Task<ContactFormType?> ValidateExisting(CreateContactTypeDto dto)
    {
        ContactFormType? cf = await _context.ContactFormType.FirstOrDefaultAsync(ct =>
            ct.Code.ToLower().Equals(dto.Code.ToLower())
            || ct.Title.ToLower().Equals(dto.Title.ToLower())
        );
        return cf;
    }

    private async Task<ContactFormType> StoreAsync(CreateContactTypeDto dto)
    {
        ContactFormType newContactType = new() { Code = dto.Code.Trim(), Title = dto.Title.Trim() };
        _context.ContactFormType.Add(newContactType);
        await _context.SaveChangesAsync();
        return newContactType;
    }

    private async Task<ContactFormType?> UpdateAsync(
        ContactFormType existingContactType,
        UpdateContactTypeDto dto
    )
    {
        existingContactType.Code = dto.Code?.Trim() ?? existingContactType.Code;
        existingContactType.Title = dto.Title?.Trim() ?? existingContactType.Title;
        existingContactType.Active = dto.Active ?? existingContactType.Active;

        await _context.SaveChangesAsync();
        return existingContactType;
    }

    public async Task<List<ReturnContactTypeDto>> GetAllCached()
    {
        try
        {
            if (!_cache.TryGetValue(CacheKey, out List<ContactFormType>? items) || items == null)
            {
                items = await this.GetAllActive();
                var cacheOptions = new MemoryCacheEntryOptions().SetAbsoluteExpiration(
                    TimeSpan.FromHours(1)
                );

                _cache.Set(CacheKey, items, cacheOptions);
            }

            return items.Adapt<List<ReturnContactTypeDto>>();
        }
        catch (System.Exception)
        {
            throw;
        }
    }

    public async Task<ContactFormType> SaveNew(CreateContactTypeDto dto)
    {
        try
        {
            ContactFormType? existingType = await ValidateExisting(dto);
            if (existingType != null)
            {
                throw new InvalidOperationException();
            }
            ContactFormType newContactType = await StoreAsync(dto);

            return newContactType;
        }
        catch (System.Exception)
        {
            throw;
        }
    }

    public async Task<ReturnContactTypeDto> Update(int id, UpdateContactTypeDto dto)
    {
        try
        {
            ContactFormType cft = await this.GetByIdOrThrow(id);
            if (dto.Code != null || dto.Title != null)
            {
                var existType = await this.ValidateExisting(
                    new() { Code = dto.Code, Title = dto.Title }
                );
            }
            ContactFormType? contactType = await this.UpdateAsync(cft, dto);
            return contactType.Adapt<ReturnContactTypeDto>();
        }
        catch (System.Exception)
        {
            throw;
        }
    }
}
