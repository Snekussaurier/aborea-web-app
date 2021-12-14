using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using AboreaWebApi.Models;
using System.Data;

namespace AboreaWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WalletController : Controller
    {
        private readonly IConfiguration _configuration;

        public WalletController(IConfiguration configuration) {
            _configuration = configuration;
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"SELECT * FROM wallet WHERE id = @id";

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

        /*[HttpPost]
        public JsonResult Post(Wallet wallet)
        {
            string query = @"insert into Wallet(wallet) values (@CharName)";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@CharName", wallet.);
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    //Close reader and connection
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Succesfully added Char");
        }*/

        [HttpPut]
        public JsonResult Put(Wallet wallet)
        {
            string query = @"update wallet
                                set goldfalken = @goldfalken
                                set triontaler = @triontaler
                                set kupferlinge = @kupferlinge
                                set muena = @muena
                                where CharId = @CharId";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@CharId", wallet.CharId);
                    myCommand.Parameters.AddWithValue("@goldfalken", wallet.Goldfalken);
                    myCommand.Parameters.AddWithValue("@triontaler", wallet.Triontaler);
                    myCommand.Parameters.AddWithValue("@kupferlinge", wallet.Kupferlinge);
                    myCommand.Parameters.AddWithValue("@muena", wallet.Muena);
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    //Close reader and connection
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Successfully updated Wallet");
        }

        /*[HttpDelete("{id}")]
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
        }*/
    }
}
