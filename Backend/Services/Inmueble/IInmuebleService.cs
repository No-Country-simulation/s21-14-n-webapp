using UrbaniaBackend.Dtos.Inmueble;

public interface IInmuebleService
{
    Task<IEnumerable<InmueblesDto>> GetAllAsync();
    Task<InmueblesDto> GetByIdAsync(int id);
    Task<InmueblesDto> CreateAsync(InmueblesDto inmuebleDto);
    Task<InmueblesDto> UpdateAsync(int id, InmueblesDto inmuebleDto);
    Task<bool> DeleteAsync(int id);

    // ordenar por Precio y dimensiones
    // filtrar por tipo de propiedad
    // filtrar por contrato
    // busqueda por ubicacion/direccion y ¿palabra clave?



}