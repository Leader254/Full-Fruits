using FruitsApi.Models;
using FruitsApi.Models.Dtos;

namespace FruitsApi.Services.IServices
{
    public interface IUserInterface
    {
        public Task<string> RegisterUser(RegUserDto payload);
        public Task<LoginResponseDto> LoginUser(LoginRequestDto payload);
        public Task<bool> AssignRole(string email, string role);
        public Task<IEnumerable<ApplicationUser>> GetUsers();
    }
}
