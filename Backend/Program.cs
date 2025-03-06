using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using UrbaniaBackend.Context;
using UrbaniaBackend.Data;
using UrbaniaBackend.Models;
using UrbaniaBackend.Services;
using UrbaniaBackend.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var connectionString =
    builder.Configuration.GetConnectionString("ConnectionDB")
    ?? throw new InvalidOperationException("Connection string 'ConnectionDB' not found.");

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("JwtSettings"));

builder
    .Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["JwtSettings:Issuer"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["JwtSettings:Secret"])
            ),
        };
    });

builder.Services.AddAuthorization();

builder.Services.AddScoped<IJwtService, JwtService>();

builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();
builder.Services.AddScoped<IPasswordHelper, PasswordHelper>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IAuthService, AuthService>();

// Services
builder.Services.AddScoped<IInmobiliariaService, InmobiliariaService>();

builder.Services.AddScoped<IInmuebleService, InmueblesService>();
builder.Services.AddMemoryCache();

builder.Services.AddScoped<ContactFormTypeService>();

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.AddSecurityDefinition(
        "Bearer",
        new OpenApiSecurityScheme
        {
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            Scheme = "Bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description = "Ingrese el token JWT en el formato: Bearer {token}",
        }
    );
    c.OperationFilter<AuthorizeCheckOperationFilter>();
});

var app = builder.Build();

// Seeding DB
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    DbSeeder.Seed(context);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//	app.UseSwagger();
//  app.UseSwaggerUI();


using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    DbSeeder.Seed(context);
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
