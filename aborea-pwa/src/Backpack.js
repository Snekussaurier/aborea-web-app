import React from 'react';
import Header from './components/Header'
import StepperBig from './components/StepperBig';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash';

const Backpack = ({backpack}) => {
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
            <div className="Horizontal" style={{ marginTop: "20px" }}>
                <h2>
                    Inventory
                </h2>
                <div className="App-container-add-button-relative Electric-violet">
                    <p>
                        Add item +
                    </p>
                </div>
            </div>
            <table>
                {backpack.length > 0 ? backpack.map((item) => <tr><td><div className='Armor-gradient' style={{width: '30px', height: '30px', borderRadius: '5px'}}/></td><td>{item.itemName}</td><td>X {item.ammount}</td><td><UilTrash style={{color: "#ff416c"}}/></td></tr>) : <h3>Inventory is empty</h3>}
            </table>
        </>
    );
}

export default Backpack