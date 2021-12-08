import React from 'react';
import PlayerChar from './img/Bard.png'

const Home = () => {
    return (
        <>
            <h2>
                Character
            </h2>
            <div className="App-container App-player">
                <img src={PlayerChar} alt="Logo" className="App-logo" />
                <div className="App-container-description">
                    <h3>
                        Firion
                    </h3>
                    <p>
                        Human
                    </p>
                    <p>
                        Bard
                    </p>
                </div>
            </div>
            <h2>
                Stats
            </h2>
            <div className="App-container Horizontal">
                <div className="App-container Background-grey">
                    <h2>
                        Health
                    </h2>
                </div>
                <div className="App-container Background-grey">
                    <h2>
                        Manapoints
                    </h2>
                </div>
            </div>
            <div className="App-container Horizontal Background-grey">
                <h2>
                    ARM INI ATB DMG
                </h2>
            </div>
            <h2>
                Effects
            </h2>
            <div className="App-container Horizontal Background-grey">
                <div className="App-container-add-button">
                    <p>
                        Add effect +
                    </p>
                </div>
                <p>
                    No effects
                </p>
            </div>
        </>
    );
}

export default Home