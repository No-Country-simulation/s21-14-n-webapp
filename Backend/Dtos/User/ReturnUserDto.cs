namespace UrbaniaBackend.Dtos.User;

public class BasicReturnUserDto
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
}

public class AdminReturnUserDto
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
    public bool Active { get; set; } = default!;
    public string CreatedAt { get; set; } = default!;
}
