using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using UrbaniaBackend.Dtos.Cloudinary;

namespace UrbaniaBackend.Services.CloudinaryS;

public class CloudinaryService(Cloudinary _cloudinary) : ICloudinaryService
{
    private const long MinFileSize = 2 * 1024;
    private const long MaxFileSize = 5 * 1024 * 1024;
    private const string FolderRoot = "urbania/properties";
    private static readonly string[] AllowedExtensions = { ".jpg", ".jpeg", ".png", ".webp" };

    private static void PreUploadValidations(IFormFile file)
    {
        if (file.Length < MinFileSize)
        {
            throw new ArgumentException($"Minimum size is {MinFileSize} bytes.");
        }
        if (file.Length > MaxFileSize)
        {
            throw new ArgumentException("File size exceeds the limit");
        }
        var fileExtension = Path.GetExtension(file.FileName).ToLower();

        if (!AllowedExtensions.Contains(fileExtension))
        {
            throw new ArgumentException("Invalid file type");
        }
    }

    public async Task<string> UploadImageAsync(IFormFile file, string? folder)
    {
        PreUploadValidations(file);

        using var stream = new MemoryStream();
        await file.CopyToAsync(stream);
        var fileBytes = stream.ToArray();

        var uploadParams = new ImageUploadParams
        {
            File = new FileDescription(file.FileName, new MemoryStream(fileBytes)),
            PublicId = Guid.NewGuid().ToString(),
            Overwrite = true,
            Folder = $"{FolderRoot}/{folder}",
        };

        var uploadResult = await _cloudinary.UploadAsync(uploadParams);
        return uploadResult.SecureUrl.ToString();
    }

    public async Task<UploadReturnDto> UploadImagesAsync(IFormFile[] files, string? folder)
    {
        if (files == null || files.Length == 0)
        {
            throw new ArgumentException("No files provided");
        }

        var imageUrls = new List<string>();
        var errors = new List<string>();

        foreach (var file in files)
        {
            if (file == null || file.Length == 0)
            {
                continue;
            }

            try
            {
                var imageUrl = await UploadImageAsync(file, folder);
                imageUrls.Add(imageUrl);
            }
            catch (Exception ex)
            {
                errors.Add($"Error uploading file {file.FileName}: {ex.Message}");
                Console.WriteLine($"Error uploading file {file.FileName}: {ex.Message}");
            }
        }
        return new() { Urls = imageUrls.ToArray(), Errors = errors.ToArray() };
    }

    public async Task DeleteFolder(int inmuebleId)
    {
        try
        {
            await _cloudinary.DeleteFolderAsync($"{FolderRoot}/{inmuebleId}");
        }
        catch (System.Exception)
        {
            Console.WriteLine("Error deleting folder");
        }
    }
}
