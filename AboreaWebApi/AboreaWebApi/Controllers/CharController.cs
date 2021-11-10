using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace AboreaWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CharController : Controller
    {
        private readonly IConfiguration _configuration;

        public CharController(IConfiguration configuration) {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select CharId as ""CharId"",
                            CharName as ""CharName"" from Char";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(datatable);

        }
    }
}
