using FruitsApi.Models;

namespace FruitsApi.Services.IServices
{
    public interface ITokenGenerator
    {
        string GenerateToken(ApplicationUser user, IEnumerable<string> roles);
    }
}
