using UrbaniaBackend.Utils.Inmueble;

namespace UrbaniaBackend.Dtos.Inmueble
{
    public class UpdateInmueblesDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Address { get; set; }
        public int SquareMeters { get; set; }
        public DateTime DatePublication { get; set; }
        public TypeProperty TypeProperty { get; set; }
        public TypeContract TypeContract { get; set; }
        public int InmobiliariaId { get; set; }
    }
}
