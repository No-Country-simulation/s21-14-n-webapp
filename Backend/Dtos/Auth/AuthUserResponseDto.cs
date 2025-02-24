namespace UrbaniaBackend.Dtos.Auth;

public class AuthUserResponseDto
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
    public string Token { get; set; } = default!;
}
