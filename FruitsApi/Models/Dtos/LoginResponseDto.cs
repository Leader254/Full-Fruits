using System.ComponentModel.DataAnnotations;

namespace FruitsApi.Models.Dtos
{
    public class LoginResponseDto
    {
        public UserDto User { get; set; } = default!;

        public string Token { get; set; } = string.Empty;
    }
}
