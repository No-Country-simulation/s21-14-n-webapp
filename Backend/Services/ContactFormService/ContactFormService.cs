using Mapster;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Extensions;
using UrbaniaBackend.Context;
using UrbaniaBackend.Dtos.ContactForm;
using UrbaniaBackend.Dtos.ContactFormType;
using UrbaniaBackend.Models;
using UrbaniaBackend.Models.Enums;
using UrbaniaBackend.Services.ContactFormTypeS;

namespace UrbaniaBackend.Services.ContactFormService;

public class ContactFormService : IContactFormService
{
    private readonly AppDbContext _context;
    private readonly IContactFormTypeService _typeService;
    private readonly TypeAdapterConfig _mapsterConfig;

    public ContactFormService(AppDbContext context, IContactFormTypeService typeService)
    {
        _context = context;
        _typeService = typeService;
        _mapsterConfig = new TypeAdapterConfig();
        ConfigureMapster();
    }

    private void ConfigureMapster()
    {
        _mapsterConfig
            .NewConfig<ContactForm, ReturnContactFormAdminDto>()
            .Map(dest => dest.Status, src => src.Status.GetDisplayName())
            .Map(dest => dest.Type, src => src.Type.Adapt<ReturnContactTypeDto>(_mapsterConfig))
            .IgnoreNullValues(true);
    }

    private async Task<int> FindInmuebleOrThrow(int inmuebleId)
    {
        bool exists = await _context.Inmueble.AsNoTracking().AnyAsync(inm => inm.Id == inmuebleId);
        if (!exists)
        {
            throw new InvalidOperationException("PropertyId not found");
        }
        return inmuebleId;
    }

    private async Task<ContactForm> FindByIdOrThrow(int contactFormId)
    {
        return await _context.ContactForm.FindAsync(contactFormId)
            ?? throw new InvalidOperationException("Contact Form not found");
    }

    private async Task PreCreateValidations(CreateContactFormDto dto)
    {
        var types = (await _typeService.GetAllCached()).ToList();
        if (!types.Any(t => t.Id == dto.ContactFormTypeId))
        {
            throw new InvalidOperationException("Contact Form Type not exists");
        }
        if (
            dto.ContactFormTypeId is 0
            && types.Any(t => t.Id == dto.ContactFormTypeId && t.Code.StartsWith("get_"))
        )
        {
            throw new InvalidOperationException("This action requires a PropertyId");
        }
        if (dto.PropertyId != null)
        {
            await FindInmuebleOrThrow(dto.PropertyId.Value);
        }
    }

    public async Task<ContactForm> CreateContactForm(CreateContactFormDto dto)
    {
        try
        {
            await PreCreateValidations(dto);
            ContactForm cf = dto.Adapt<ContactForm>();
            _context.ContactForm.Add(cf);
            await _context.SaveChangesAsync();
            return cf;
        }
        catch (System.Exception)
        {
            throw;
        }
    }

    public async Task<IEnumerable<ReturnContactFormAdminDto>> GetAll()
    {
        try
        {
            var contactForms = await _context
                .ContactForm.AsNoTracking()
                .Include(cf => cf.Type)
                .ProjectToType<ReturnContactFormAdminDto>()
                .ToListAsync();
            return contactForms;
        }
        catch (System.Exception)
        {
            throw;
        }
    }

    public async Task<ReturnContactFormAdminDto> UpdateStatus(
        int contactFormId,
        UpdateContactFormStatusDto dto
    )
    {
        try
        {
            if (!Enum.IsDefined(typeof(ContactFormStatus), dto.Status))
            {
                throw new InvalidOperationException("Invalid status");
            }
            ContactForm cf = await FindByIdOrThrow(contactFormId);
            cf.Status = dto.Status;

            _context.ContactForm.Update(cf);
            await _context.SaveChangesAsync();
            return cf.Adapt<ReturnContactFormAdminDto>();
        }
        catch (System.Exception)
        {
            throw;
        }
    }
}
