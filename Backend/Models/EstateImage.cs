using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UrbaniaBackend.Models;

public class EstateImage
{
    [Key]
    public int Id { get; set; }

    [Required]
    [Url]
    public string ImageUrl { get; set; } = string.Empty;

    [Required]
    [Range(0, 9)]
    public int? Order { get; set; }

    [ForeignKey("Inmueble")]
    public int InmuebleId { get; set; }
    public Inmuebles Inmueble { get; set; } = default!;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; }
}
