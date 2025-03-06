using UrbaniaBackend.Utils.Inmueble;

namespace UrbaniaBackend.Dtos.Inmueble
{
    public class InmuebleFilterTypeContractDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public TypeProperty TypeProperty { get; set; }

    }
}
