using UrbaniaBackend.Dtos.ContactFormType;
using UrbaniaBackend.Models;

namespace UrbaniaBackend.Services.ContactFormTypeS;

public interface IContactFormTypeService
{
    Task<List<ReturnContactTypeDto>> GetAllCached();

    Task<ContactFormType> SaveNew(CreateContactTypeDto dto);

    Task<ReturnContactTypeDto> Update(int id, UpdateContactTypeDto dto);
}
