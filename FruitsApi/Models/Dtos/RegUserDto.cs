﻿using System.ComponentModel.DataAnnotations;

namespace FruitsApi.Models.Dtos
{
    public class RegUserDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Name { get; set; } = string.Empty;
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;
        [Required]
        public string PhoneNumber { get; set; } = string.Empty;
        public string? Role { get; set; } = string.Empty;
    }
}
