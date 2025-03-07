using UrbaniaBackend.Utils.Inmueble;

namespace UrbaniaBackend.Models
{
    public class Inmuebles
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Address { get; set; }
        public int SquareMeters { get; set; }
        public TypeProperty TypeProperty { get; set; }
        public TypeContract TypeContract { get; set; }
        public ICollection<EstateImage>? Images { get; set; }
        public DateTime DatePublication { get; set; } = DateTime.UtcNow;
        public int InmobiliariaId { get; set; }
        public Inmobiliaria Inmobiliaria { get; set; } = null!;
    }
}
