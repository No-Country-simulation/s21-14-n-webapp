using UrbaniaBackend.Dtos.Cloudinary;

namespace UrbaniaBackend.Services.CloudinaryS;

public interface ICloudinaryService
{
    Task<string> UploadImageAsync(IFormFile file, string? folder);
    Task<UploadReturnDto> UploadImagesAsync(IFormFile[] files, string? folder);
    Task DeleteFolder(int inmuebleId);
}
