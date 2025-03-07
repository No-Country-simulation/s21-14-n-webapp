using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UrbaniaBackend.Migrations
{
    /// <inheritdoc />
    public partial class ImagesToInmueble : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Inmueble");

            migrationBuilder.CreateTable(
                name: "EstateImage",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Order = table.Column<int>(type: "int", nullable: false),
                    InmuebleId = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstateImage", x => x.Id);
                    table.ForeignKey(
                        name: "FK_EstateImage_Inmueble_InmuebleId",
                        column: x => x.InmuebleId,
                        principalTable: "Inmueble",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EstateImage_Id_Order",
                table: "EstateImage",
                columns: new[] { "Id", "Order" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_EstateImage_InmuebleId",
                table: "EstateImage",
                column: "InmuebleId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EstateImage");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Inmueble",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
