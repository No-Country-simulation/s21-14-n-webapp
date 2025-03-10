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
            migrationBuilder.CreateTable(
                name: "ContactFormType",
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
                    table.PrimaryKey("PK_ContactFormType", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContactFormType_Code",
                table: "ContactFormType",
                column: "Code",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ContactFormType_Title",
                table: "ContactFormType",
                column: "Title",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactFormType");
        }
    }
}
