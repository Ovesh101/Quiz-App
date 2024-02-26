using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Quiz_API.Migrations
{
    /// <inheritdoc />
    public partial class ColumnAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "QnInWords",
                table: "Questions",
                type: "nvarchar(250)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QnInWords",
                table: "Questions");
        }
    }
}
