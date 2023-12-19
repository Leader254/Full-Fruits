using AutoMapper;
using FruitsApi.Models;
using FruitsApi.Models.Dtos;

namespace FruitsApi.Profiles
{
    public class AuthProfiles : Profile
    {
        public AuthProfiles()
        {
            CreateMap<RegUserDto, ApplicationUser>()
            .ForMember(dest => dest.UserName, u => u.MapFrom(reg => reg.Email));

            CreateMap<ApplicationUser, UserDto>().ReverseMap();
        }
    }
}
