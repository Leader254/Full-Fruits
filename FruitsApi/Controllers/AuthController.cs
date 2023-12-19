using FruitsApi.Models;
using FruitsApi.Models.Dtos;
using FruitsApi.Services.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace FruitsApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(ResponseDto), (int)HttpStatusCode.BadRequest)]
    [ProducesResponseType(typeof(ResponseDto), (int)HttpStatusCode.InternalServerError)]
    public class AuthController : ControllerBase
    {
        private readonly ResponseDto _response;
        private readonly IUserInterface _userService;

        public AuthController(IUserInterface userInterface)
        {
            _response = new ResponseDto();
            _userService = userInterface;
        }

        // login
        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<ResponseDto>> Login(LoginRequestDto payload)
        {
            try
            {
                var result = await _userService.LoginUser(payload);
                if(result.User == null)
                {
                    _response.Success = false;
                    _response.Message = "Invalid Credentials";
                    return Unauthorized(_response);
                }
                _response.Data = result;
                return Ok(result);
            }
            catch (Exception ex)
            {
               return BadRequest(new { message = ex.Message });
            }
        }
        [HttpPost]
        [Route("register")]
        public async Task<ActionResult<ResponseDto>> RegisterUser(RegUserDto payload)
        {
            try
            {
                var errorMessage = await _userService.RegisterUser(payload);
                if (!string.IsNullOrEmpty(errorMessage))
                {
                    _response.Success = false;
                    _response.Message = errorMessage;
                    return BadRequest(_response);
                }

                
                _response.Message = "User Created Successfully";
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.Success = false;
                _response.Message = "An error occurred: " + ex.Message;
                return StatusCode((int)HttpStatusCode.InternalServerError, _response);
            }
        }
    }
}
