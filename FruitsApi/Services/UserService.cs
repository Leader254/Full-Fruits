using AutoMapper;
using FruitsApi.Data;
using FruitsApi.Models;
using FruitsApi.Models.Dtos;
using FruitsApi.Services.IServices;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace FruitsApi.Services
{
    public class UserService : IUserInterface
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ITokenGenerator _tokenGenerator;
        public UserService(UserManager<ApplicationUser> userManager, AppDbContext context, RoleManager<IdentityRole> roleManager, ITokenGenerator tokenGenerator, IMapper mapper)
        {
            _userManager = userManager;
            _context = context;
            _mapper = mapper;
            _roleManager = roleManager;
            _tokenGenerator = tokenGenerator;
        }
        public Task<bool> AssignRole(string email, string role)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<ApplicationUser>> GetUsers()
        {
            throw new NotImplementedException();
        }

        public async Task<LoginResponseDto> LoginUser(LoginRequestDto payload)
        {
            var user = await _context.ApplicationUsers.FirstOrDefaultAsync(u => u.UserName.ToLower() == payload.Username.ToLower());
            var checkValidPass = await _userManager.CheckPasswordAsync(user, payload.Password);
            if (!checkValidPass || user == null)
            {
                new LoginRequestDto();
            }

            var roles = await _userManager.GetRolesAsync(user);
            var token = _tokenGenerator.GenerateToken(user, roles);

            var loggedUser = new LoginResponseDto()
            {
                User = _mapper.Map<UserDto>(user),
                Token = token,
            };
            return loggedUser;
        }

        public async Task<string> RegisterUser(RegUserDto regUserDto)
        {
            var user = _mapper.Map<ApplicationUser>(regUserDto);
            try
            {
                var result = await _userManager.CreateAsync(user, regUserDto.Password);
                if(result.Succeeded)
                {
                    return "";
                }
                else
                {
                    return result.Errors.FirstOrDefault().Description;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                throw;
            }
        }
    }
}
