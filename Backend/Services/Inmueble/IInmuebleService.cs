using UrbaniaBackend.Dtos.Inmueble;

namespace UrbaniaBackend.Services.Inmueble
{
    public interface IInmuebleService
    {
        Task<IEnumerable<InmueblesDto>> GetAllAsync();
        Task<InmueblesDto> GetByIdAsync(int id);
        Task<InmueblesDto> CreateAsync(InmueblesDto inmuebleDto);
        Task<InmueblesDto> UpdateAsync(int id, InmueblesDto inmuebleDto);
        Task<bool> DeleteAsync(int id);
    }
}
    