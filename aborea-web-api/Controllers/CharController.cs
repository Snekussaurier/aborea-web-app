﻿using Microsoft.AspNetCore.Mvc;
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
                                set char_name = @charname
                                set char_race = @charrace
                                set char_profession = @charprofession
                                set char_ep = @charep
                                set char_dp = @chardp
                                set char_strength = @charstrength
                                set char_dexterity = @chardexterity
                                set char_constitution = @charconstitution
                                set char_intelligence = @charintelligence
                                set char_charisma = @charcharisma
                                set char_athletic = @charathlethic
                                set char_influence = @charinfluence
                                set char_targeted_spell = @chartargetedspell
                                set char_cunning = @charcunning
                                set char_develop_magic = @chardevelopmagic
                                set char_nature = @charnature
                                set char_horse_riding = @charhorseriding
                                where id = @charid";

            DataTable datatable = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("AboreaAppCon");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", character.Id);
                    myCommand.Parameters.AddWithValue("@charname", character.CharName);
                    myCommand.Parameters.AddWithValue("@charrace", character.CharRace);
                    myCommand.Parameters.AddWithValue("@charep", character.CharEp);
                    myCommand.Parameters.AddWithValue("@chardp", character.CharDp);
                    myCommand.Parameters.AddWithValue("@charstrength", character.CharStrength);
                    myCommand.Parameters.AddWithValue("@chardexterity", character.CharDexterity);
                    myCommand.Parameters.AddWithValue("@charconstitution", character.CharConstitution);
                    myCommand.Parameters.AddWithValue("@charintelligence", character.CharIntelligence);
                    myCommand.Parameters.AddWithValue("@charcharisma", character.CharCharisma);
                    myCommand.Parameters.AddWithValue("@charathletic", character.CharAthletic);
                    myCommand.Parameters.AddWithValue("@charinfluence", character.CharInfluence);
                    myCommand.Parameters.AddWithValue("@chartargetedspell", character.CharTargetedSpell);
                    myCommand.Parameters.AddWithValue("@charcunning", character.CharCunning);
                    myCommand.Parameters.AddWithValue("@chardevelopmagic", character.CharDevelopMagic);
                    myCommand.Parameters.AddWithValue("@charnature", character.CharNature);
                    myCommand.Parameters.AddWithValue("@charhorseriding", character.CharHorseRiding);
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
