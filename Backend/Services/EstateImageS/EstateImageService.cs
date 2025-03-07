using UrbaniaBackend.Context;

namespace UrbaniaBackend.Services.EstateImageS;

public class EstateImageService(AppDbContext _context) : IEstateImageService
{
    public async Task SaveUrlsAsync(string[] imageUrls, int inmuebleId)
    {
        for (int i = 0; i < imageUrls.Length; i++)
        {
            _context.EstateImage.Add(
                new()
                {
                    ImageUrl = imageUrls[i],
                    InmuebleId = inmuebleId,
                    Order = i + 1,
                }
            );
        }

        await _context.SaveChangesAsync();
    }
}
