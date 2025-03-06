using Microsoft.EntityFrameworkCore.Metadata.Internal;
using UrbaniaBackend.Dtos.Inmueble;
using UrbaniaBackend.Utils.Inmueble;

public interface IInmuebleService
{
    Task<IEnumerable<InmueblesDto>> GetAllAsync();
    Task<InmueblesDto> GetByIdAsync(int id);
    Task<InmueblesDto> CreateAsync(InmueblesDto inmuebleDto);
    Task<InmueblesDto> UpdateAsync(int id, InmueblesDto inmuebleDto);
    Task<bool> DeleteAsync(int id);
    //ordena por precio
    Task<List<InmuebleFilterPriceDto>> OrderByPrice();
    //ordena por metros cuadrados
    Task<List<InmuebleFilterSquareMetersDto>> OrderBySquareMeters ();

    // filtrar por tipo de propiedad
    Task<List<InmuebleFilterTypeContractDto>> GetByTypePropertyAsync(TypeProperty typeProperty);

}