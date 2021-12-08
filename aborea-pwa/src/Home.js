import React from 'react';
import PlayerChar from './img/Bard.png'

const Home = () => {
    return (
        <>
            <h2>
                Character
            </h2>
            <div className="App-container App-player">
                <img src={PlayerChar} alt="Logo" className="App-logo"/>
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
                Character
            </h2>
            <div className="App-container">
                <img src={PlayerChar} alt="Logo" className="App-logo"/>
            </div>
        </>
    );
}

export default Home