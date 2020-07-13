using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Hospital.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        // GET: api/Security
       
        private string GenerateKey(string userName)
        {
            // Key
            var securityKey = new SymmetricSecurityKey
                (Encoding.UTF8.GetBytes("238420983409284098230950"));
            // Algorithm
            var credentials = new
                    SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // claimns
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, "userName"),
                new Claim(JwtRegisteredClaimNames.Email, ""),
                new Claim("Admin", "true"),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                };

            var token = new JwtSecurityToken("finishingschool",
              "finishingschool",
              claims,
              expires: DateTime.Now.AddMinutes(3600),
              signingCredentials: credentials);

            string tokenstring = new JwtSecurityTokenHandler().WriteToken(token);
            return  tokenstring;
        }
        //POST: api/Security
        [HttpPost]
        public IActionResult Post([FromBody] User obj)
        {
            if((obj.userName=="rohit") && (obj.password == "password@123")){
                obj.token = GenerateKey(obj.userName);
                obj.password = "";
                return Ok(obj);
            }
            else
            {
                return StatusCode(401,"Not a proper User");
            }

        }
    }

       

}
    

