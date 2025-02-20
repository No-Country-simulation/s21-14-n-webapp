namespace UrbaniaBackend.Models
{
    public class Inmuebles
    {
        public int Id { get; set; }
        public string Tittle{ get; set; }
        public string Description{ get; set; }
        public string Price { get; set; }
        public string Adress { get; set; }

        //podria ser enum. Casa,depto 
        public string TypeEstate { get; set; }
        public string ImageUrl { get; set; }
        public DateTime DatePublication{ get; set; } = DateTime.UtcNow;

        //relacion
        public int InmobiliariaId { get; set; }
        public Inmobiliaria Inmobiliaria { get; set; } = null!;


    }
}
