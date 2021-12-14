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

        public CharController(IConfiguration configuration)
        {
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
                    myCommand.Parameters.AddWithValue("@CharName", character.Char_Name);
                    myReader = myCommand.ExecuteReader();
                    datatable.Load(myReader);

                    //Close reader and connection
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Succesfully added Char");
        }

        [HttpPut("{id}")]
        public JsonResult Put(Character character)
        {

            string query = @"update character 
                                set char_name = @charname,
                                    char_race = @charrace,
                                    char_profession = @charprofession, 
                                    char_ep = @charep,
                                    char_dp = @chardp,
                                    char_health = @charhealth,
                                    char_mana = @charmana,
                                    char_strength = @charstrength,
                                    char_dexterity = @chardexterity,
                                    char_constitution = @charconstitution,
                                    char_intelligence = @charintelligence,
                                    char_charisma = @charcharisma,
                                    char_athletic = @charathletic,
                                    char_influence = @charinfluence,
                                    char_targeted_spell = @chartargetedspell,
                                    char_cunning = @charcunning,
                                    char_develop_magic = @chardevelopmagic,
                                    char_nature = @charnature,
                                    char_horse_riding = @charhorseriding
                                where id = @id";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", character.Id);
                    myCommand.Parameters.AddWithValue("@charname", character.Char_Name);
                    myCommand.Parameters.AddWithValue("@charrace", character.Char_Race);
                    myCommand.Parameters.AddWithValue("@charprofession", character.Char_Profession);
                    myCommand.Parameters.AddWithValue("@charep", character.Char_Ep);
                    myCommand.Parameters.AddWithValue("@chardp", character.Char_Dp);
                    myCommand.Parameters.AddWithValue("@charhealth", character.Char_Health);
                    myCommand.Parameters.AddWithValue("@charmana", character.Char_Mana);
                    myCommand.Parameters.AddWithValue("@charstrength", character.Char_Strength);
                    myCommand.Parameters.AddWithValue("@chardexterity", character.Char_Dexterity);
                    myCommand.Parameters.AddWithValue("@charconstitution", character.Char_Constitution);
                    myCommand.Parameters.AddWithValue("@charintelligence", character.Char_Intelligence);
                    myCommand.Parameters.AddWithValue("@charcharisma", character.Char_Charisma);
                    myCommand.Parameters.AddWithValue("@charathletic", character.Char_Athletic);
                    myCommand.Parameters.AddWithValue("@charinfluence", character.Char_Influence);
                    myCommand.Parameters.AddWithValue("@chartargetedspell", character.Char_Targeted_Spell);
                    myCommand.Parameters.AddWithValue("@charcunning", character.Char_Cunning);
                    myCommand.Parameters.AddWithValue("@chardevelopmagic", character.Char_Develop_Magic);
                    myCommand.Parameters.AddWithValue("@charnature", character.Char_Nature);
                    myCommand.Parameters.AddWithValue("@charhorseriding", character.Char_Horse_Riding);
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
