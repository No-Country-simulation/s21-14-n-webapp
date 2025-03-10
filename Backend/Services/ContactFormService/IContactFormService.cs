using Mapster;
using Microsoft.EntityFrameworkCore;
using UrbaniaBackend.Dtos.ContactForm;
using UrbaniaBackend.Models;
using UrbaniaBackend.Models.Enums;

namespace UrbaniaBackend.Services.ContactFormService;

public interface IContactFormService
{
    Task<ContactForm> CreateContactForm(CreateContactFormDto dto);

    Task<IEnumerable<ReturnContactFormAdminDto>> GetAll();

    Task<ReturnContactFormAdminDto> UpdateStatus(int contactFormId, UpdateContactFormStatusDto dto);
}
