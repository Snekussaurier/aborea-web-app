using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using AboreaWebApi.Models;
using System.Data;

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

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"SELECT * FROM character WHERE id = @id";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    //Close reader and connection
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(datatable);
        }

        [HttpPost]
        public JsonResult Post(Character character)
        {
            string query = @"insert into Char(CharName) values (@CharName)";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@CharName", character.CharName);
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    //Close reader and connection
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Succesfully added Char");
        }

        [HttpPut]
        public JsonResult Put(Character character)
        {
            string query = @"update Char 
                                set CharName = @CharName
                                where CharId = @CharId";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@CharId", character.Id);
                    myCommand.Parameters.AddWithValue("@CharName", character.CharName);
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    //Close reader and connection
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Successfully updated Char");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete from Char
                                where CharId = @CharId";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@CharId", id);
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    //Close reader and connection
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Successfully deleted Char");
        }
    }
}
