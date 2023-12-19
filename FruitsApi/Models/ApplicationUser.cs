using Microsoft.AspNetCore.Identity;

namespace FruitsApi.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; } = string.Empty;
    }
}
