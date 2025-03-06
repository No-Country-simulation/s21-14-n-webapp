using UrbaniaBackend.Utils.Inmueble;

namespace UrbaniaBackend.Dtos.Inmueble
{
	public class InmuebleFilterContractTypeDto
	{
		public int Id { get; set; }
		public string Title { get; set; }
		public TypeContract TypeContract { get; set; }
	}
}
