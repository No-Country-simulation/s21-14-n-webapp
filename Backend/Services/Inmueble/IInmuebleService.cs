using UrbaniaBackend.Dtos.Inmueble;
using UrbaniaBackend.Utils.Inmueble;

public interface IInmuebleService
{
	Task<IEnumerable<ReturnInmuebleDto>> GetAllAsync();
	Task<InmueblesDto> GetByIdAsync( int id );
	Task<InmueblesDto> CreateAsync( InmueblesDto inmuebleDto );
	Task<UpdateInmueblesDto> UpdateAsync( int id, UpdateInmueblesDto inmuebleDto );
	Task<bool> DeleteAsync( int id );
	//ordena por precio
	Task<List<InmuebleFilterPriceDto>> OrderByPrice();
	//ordena por metros cuadrados
	Task<List<InmuebleFilterSquareMetersDto>> OrderBySquareMeters();

	// filtrar por tipo de propiedad
	Task<List<InmuebleFilterTypeContractDto>> GetByTypePropertyAsync( TypeProperty typeProperty );

	// filtar por tipo de contrato
	Task<List<InmuebleFilterContractTypeDto>> GetByContractTypeAsync( TypeContract typeContract );
	// busqueda por direccion
	Task<List<InmuebleFilterAddressDto>> GetByAddressAsync( string address );
	//busqueda por palabras clave
	Task<List<InmuebleFilterKeyWordsDto>> GetByKeywordsAsync( string keywords );
}