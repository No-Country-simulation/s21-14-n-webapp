using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UrbaniaBackend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateInmobiliaria : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "mail",
                table: "Inmobiliaria",
                newName: "Email");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Inmobiliaria",
                newName: "mail");
        }
    }
}
