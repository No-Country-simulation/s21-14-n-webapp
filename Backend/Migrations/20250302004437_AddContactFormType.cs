using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UrbaniaBackend.Migrations
{
    /// <inheritdoc />
    public partial class AddContactFormType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inmueble_Inmobiliaria_InmobiliariaId",
                table: "Inmueble");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Inmobiliaria",
                table: "Inmobiliaria");

            migrationBuilder.RenameTable(
                name: "Inmobiliaria",
                newName: "Inmobiliarias");

            migrationBuilder.RenameColumn(
                name: "mail",
                table: "Inmobiliarias",
                newName: "Email");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Inmobiliarias",
                table: "Inmobiliarias",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "ContactFormTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: false),
                    Code = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    Active = table.Column<bool>(type: "bit", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactFormTypes", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContactFormTypes_Code",
                table: "ContactFormTypes",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ContactFormTypes_Title",
                table: "ContactFormTypes",
                column: "Title",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Inmueble_Inmobiliarias_InmobiliariaId",
                table: "Inmueble",
                column: "InmobiliariaId",
                principalTable: "Inmobiliarias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Inmueble_Inmobiliarias_InmobiliariaId",
                table: "Inmueble");

            migrationBuilder.DropTable(
                name: "ContactFormTypes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Inmobiliarias",
                table: "Inmobiliarias");

            migrationBuilder.RenameTable(
                name: "Inmobiliarias",
                newName: "Inmobiliaria");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Inmobiliaria",
                newName: "mail");

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
    }
}
