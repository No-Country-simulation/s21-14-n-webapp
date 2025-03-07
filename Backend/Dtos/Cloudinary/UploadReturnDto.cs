namespace UrbaniaBackend.Dtos.Cloudinary;

public class UploadReturnDto
{
    public string[] Urls { get; set; } = default!;
    public string[] Errors { get; set; } = default!;
}
