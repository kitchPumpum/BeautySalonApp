using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Backend.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        private IConfiguration _configuration;

        public LogInController (IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        [Route("")]

        public async Task<ActionResult> login([FromForm] string Email, [FromForm] string Password)
        {
            if (Email.Length == 0 || Password.Length == 0)
            {
                return this.BadRequest(new { error = "All fields are required" });
            }
            else
            {
                string query = "select * from Users where Email=@Email and Password=@Password";
                DataTable table = new DataTable();
                string sqlDatasource = _configuration.GetConnectionString("BackendConnectionString");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDatasource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {

                        myCommand.Parameters.AddWithValue("@Email", Email);
                        myCommand.Parameters.AddWithValue("@Password", Password);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        if (table != null && table.Rows.Count > 0)
                        {
                            return new JsonResult("Successfully Login");
                        }
                        else
                        {
                            return this.BadRequest(new { error = "Login Failed" });
                        }

                        myReader.Close();
                        myCon.Close();
                    }

                }
            }
        }

    }
}
