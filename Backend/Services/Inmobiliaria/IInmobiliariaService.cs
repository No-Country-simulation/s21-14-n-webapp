using UrbaniaBackend.Dtos.Inmobiliaria;

public interface IInmobiliariaService
{
	Task<IEnumerable<InmobiliariaDto>> GetAllAsync();
	Task<InmobiliariaDto> GetByIdAsync( int id );
	Task<InmobiliariaDto> CreateAsync( InmobiliariaDto inmobiliariaDto );
	Task<InmobiliariaDto> UpdateAsync( int id, InmobiliariaDto inmobiliariaDto );
	Task<bool> DeleteAsync( int id );
}

