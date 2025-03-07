namespace UrbaniaBackend.Services.EstateImageS;

public interface IEstateImageService
{
    Task SaveUrlsAsync(string[] imageUrls, int inmuebleId);
}
