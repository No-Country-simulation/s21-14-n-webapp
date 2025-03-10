using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UrbaniaBackend.Migrations
{
    /// <inheritdoc />
    public partial class AddContactForm : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactForm",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClientName = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
                    ClientEmail = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    ContactFormTypeId = table.Column<int>(type: "int", nullable: false),
                    PropertyId = table.Column<int>(type: "int", nullable: true),
                    Status = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactForm", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ContactForm_ContactFormType_ContactFormTypeId",
                        column: x => x.ContactFormTypeId,
                        principalTable: "ContactFormType",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ContactForm_ContactFormTypeId",
                table: "ContactForm",
                column: "ContactFormTypeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactForm");
        }
    }
}
