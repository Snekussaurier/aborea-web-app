import React from 'react';
import PlayerChar from './img/Bard.png'
import UilPen from '@iconscout/react-unicons/icons/uil-pen';
import Header from './components/Header'
import Effects from './components/Effects';

const Home = ( {effects, onDelete} ) => {
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
            <div className="Horizontal">
                <div className="App-container Background-grey Margin-right Health-gradient">
                    <p>
                        Health
                    </p>
                    <h1>
                        23
                    </h1>
                </div>
                <div className="App-container Background-grey Margin-left Mana-gradient">
                    <p>
                        Mana
                    </p>
                    <h1>
                        0
                    </h1>
                </div>
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
                    <h1>
                        2
                    </h1>
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
                <div className="App-container-add-button-relative Electric-violet">
                    <p>
                        +
                    </p>
                </div>
            </div>
            <div>
                {effects.length > 0 ? <Effects effects={effects} onDelete={onDelete}/> : <h3>No gear equipped</h3>}
            </div>
            <div className="Horizontal" style={{ marginTop: "20px" }}>
                <h2>
                    Effects
                </h2>
                <div className="App-container-add-button-relative Electric-violet">
                    <p>
                        +
                    </p>
                </div>
            </div>
            <div>
            {effects.length > 0 ? <Effects effects={effects} onDelete={onDelete}/> : <h3>No effects</h3>}
            </div>
        </>
    );
}

export default Home