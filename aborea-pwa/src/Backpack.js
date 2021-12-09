import React from 'react';
import Header from './components/Header'

const Backpack = () => {
    return (
        <>
            <Header name="Backpack"/>
            <h2>
                Money
            </h2>
            <div className="Horizontal">
                <div className="App-container Background-grey Margin-right Health-gradient">
                    <p>
                        Goldfalken
                    </p>
                    <h1>
                        11
                    </h1>
                </div>
                <div className="App-container Background-grey Margin-left Mana-gradient">
                    <p>
                        Triontaler
                    </p>
                    <h1>
                        4
                    </h1>
                </div>
            </div>
            <div className="Horizontal">
                <div className="App-container Background-grey Margin-right Damage-gradient">
                    <p>
                        Kupferlinge
                    </p>
                    <h1>
                        8
                    </h1>
                </div>
                <div className="App-container Background-grey Margin-left Armor-gradient">
                    <p>
                        Muena
                    </p>
                    <h1>
                        5
                    </h1>
                </div>
            </div>
            <h2>
                Backpack size
            </h2>
            <div className="App-container Horizontal Background-grey">

            </div>
        </>
    );
}

export default Backpack