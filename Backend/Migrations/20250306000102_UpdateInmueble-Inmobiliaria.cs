using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UrbaniaBackend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateInmuebleInmobiliaria : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TypeEstate",
                table: "Inmueble",
                newName: "TypeProperty");

            migrationBuilder.RenameColumn(
                name: "Tittle",
                table: "Inmueble",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Adress",
                table: "Inmueble",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "mail",
                table: "Inmobiliaria",
                newName: "Email");

            migrationBuilder.AddColumn<int>(
                name: "SquareMeters",
                table: "Inmueble",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TypeContract",
                table: "Inmueble",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SquareMeters",
                table: "Inmueble");

            migrationBuilder.DropColumn(
                name: "TypeContract",
                table: "Inmueble");

            migrationBuilder.RenameColumn(
                name: "TypeProperty",
                table: "Inmueble",
                newName: "TypeEstate");

            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Inmueble",
                newName: "Tittle");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Inmueble",
                newName: "Adress");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Inmobiliaria",
                newName: "mail");
        }
    }
}
