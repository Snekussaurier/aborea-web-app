import React from 'react';
import Header from './components/Header'
import StepperBig from './components/StepperBig';

const Backpack = (character, setCharacter) => {
    return (
        <>
            <Header name="Backpack"/>
            <h2>
                Money
            </h2>
            <div className="Horizontal">
                <StepperBig header="Goldfalken" value="11" backgroundColor={"Background-grey Margin-right"}/>
                <StepperBig header="Triontaler" value="7" backgroundColor={"Background-grey Margin-left"}/>
            </div>
            <div className="Horizontal">
                <StepperBig header="Kupferlinge" value="3" backgroundColor={"Background-grey Margin-right"}/>
                <StepperBig header="Muena" value="4" backgroundColor={"Background-grey Margin-left"}/>
            </div>
            <h2>
                Backpack size
            </h2>
            <div className="App-container Horizontal Background-grey">

            </div>
            <h2>
                Inventory
            </h2>
            <div className="App-container Horizontal Background-grey">

            </div>
        </>
    );
}

export default Backpack