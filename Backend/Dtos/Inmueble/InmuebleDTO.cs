using UrbaniaBackend.Utils.Inmueble;

namespace UrbaniaBackend.Dtos.Inmueble
{
    public class InmueblesDto
    {
        public int Id { get; set; }
        public string Tittle { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Adress { get; set; }
        public int SquareMeters { get; set; }
        public TypeProperty TypeProperty { get; set; }
        public TypeContract TypeContract { get; set; }
        public string ImageUrl { get; set; }
        public DateTime DatePublication { get; set; }
        public int InmobiliariaId { get; set; }
    }
}