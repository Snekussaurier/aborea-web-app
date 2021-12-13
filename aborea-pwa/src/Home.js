import React from 'react';
import PlayerChar from './img/Bard.png'
import UilPen from '@iconscout/react-unicons/icons/uil-pen';
import Header from './components/Header'
import Effects from './components/Effects';
import Gears from './components/Gears';
import StepperBig from './components/StepperBig';

const Home = ({ character, onAddEffects, onAddGear, effects, gears, onDeleteEffect, onDeleteGear }) => {

    return (
        <>
            <Header name="Home" />
            <h2>
                Character
            </h2>
            <div className="App-container App-player">
                <div className="App-container-add-button">
                    <UilPen size="20" style={{ color: "white" }} />
                </div>
                <img src={PlayerChar} alt="Logo" className="App-logo" />
                <div className="App-container-description">
                    {character.length > 0 ? <h3>{character[0].char_name}</h3> : <h3>{"{empty}"}</h3>}
                    {character.length > 0 ? <p>{character[0].char_race}</p> : <p>{"{empty}"}</p>}
                    {character.length > 0 ? <p>{character[0].char_profession}</p> : <p>{"{empty}"}</p>}
                </div>
            </div>
            <h2>
                Stats
            </h2>
            <div className="Horizontal">
                <StepperBig value={character.length > 0 ? character[0].char_health : "{empty}"} header={"Health"} backgroundColor={"Health-gradient Margin-right"}/>
                <StepperBig value={character.length > 0 ? character[0].char_mana : "{empty}"} header={"Mana"} backgroundColor={"Mana-gradient Margin-left"}/>
            </div>
            <div className="Horizontal">
                <div className="App-container Margin-right Background-grey">
                    <p>
                        DMG
                    </p>
                    <h1>
                        1
                    </h1>
                </div>
                <div className="App-container Margin-right Margin-left Background-grey">
                    <p>
                        ARM
                    </p>
                    <h1>
                        0
                    </h1>
                </div>
                <div className="App-container Margin-right Margin-left Background-grey">
                    <p>
                        INI
                    </p>
                    {character.length > 0 ? <h1>{Math.ceil((character[0].char_dexterity - 5) / 2)}</h1> : <h1>{"{empty}"}</h1>}
                </div>
                <div className="App-container Background-grey Margin-left">
                    <p>
                        ATB
                    </p>
                    <h1>
                        5
                    </h1>
                </div>
            </div>
            <div className="Horizontal" style={{ marginTop: "20px" }}>
                <h2>
                    Equipped gear
                </h2>
                <div className="App-container-add-button-relative Electric-violet" onClick={onAddGear} curs>
                    <p>
                        Add gear +
                    </p>
                </div>
            </div>
            <div>
                {gears.length > 0 ? <Gears list={gears} onDelete={onDeleteGear} /> : <h3>No gear equipped</h3>}
            </div>
            <div className="Horizontal" style={{ marginTop: "20px" }}>
                <h2>
                    Effects
                </h2>
                <div className="App-container-add-button-relative Electric-violet" onClick={onAddEffects}>
                    <p>
                        Add effect +
                    </p>
                </div>
            </div>
            <div>
                {effects.length > 0 ? <Effects list={effects} onDelete={onDeleteEffect} /> : <h3>No effects</h3>}
            </div>
        </>
    );
}

export default Home