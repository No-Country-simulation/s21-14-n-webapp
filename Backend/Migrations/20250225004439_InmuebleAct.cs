using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UrbaniaBackend.Migrations
{
    /// <inheritdoc />
    public partial class InmuebleAct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inmuebles_Inmobiliarias_InmobiliariaId",
                table: "Inmuebles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Inmuebles",
                table: "Inmuebles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Inmobiliarias",
                table: "Inmobiliarias");

            migrationBuilder.RenameTable(
                name: "Inmuebles",
                newName: "Inmueble");

            migrationBuilder.RenameTable(
                name: "Inmobiliarias",
                newName: "Inmobiliaria");

            migrationBuilder.RenameIndex(
                name: "IX_Inmuebles_InmobiliariaId",
                table: "Inmueble",
                newName: "IX_Inmueble_InmobiliariaId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inmueble",
                table: "Inmueble",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inmobiliaria",
                table: "Inmobiliaria",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Inmueble_Inmobiliaria_InmobiliariaId",
                table: "Inmueble",
                column: "InmobiliariaId",
                principalTable: "Inmobiliaria",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inmueble_Inmobiliaria_InmobiliariaId",
                table: "Inmueble");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Inmueble",
                table: "Inmueble");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Inmobiliaria",
                table: "Inmobiliaria");

            migrationBuilder.RenameTable(
                name: "Inmueble",
                newName: "Inmuebles");

            migrationBuilder.RenameTable(
                name: "Inmobiliaria",
                newName: "Inmobiliarias");

            migrationBuilder.RenameIndex(
                name: "IX_Inmueble_InmobiliariaId",
                table: "Inmuebles",
                newName: "IX_Inmuebles_InmobiliariaId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inmuebles",
                table: "Inmuebles",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inmobiliarias",
                table: "Inmobiliarias",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Inmuebles_Inmobiliarias_InmobiliariaId",
                table: "Inmuebles",
                column: "InmobiliariaId",
                principalTable: "Inmobiliarias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
