import { useState } from 'react';

import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack';

const Backpack = ({onIncrement}) => {
    var goldfalken = { ammount: 11};

    return(
        <div>
            <div className="App-content-header App-backpack">
                <UilBackpack size="56" className="App-content-header-icon"/>
                <h1>
                    Backpack
                </h1>
            </div>
            <div className="App-backpack-content">
                <div>
                    <h3>
                        My Wallet
                    </h3>
                    <div className="App-backpack-content-horizontal">
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--1)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Goldfalken
                            </p>
                            <h2>
                                {goldfalken.ammount}
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn" onClick={() => onIncrement(goldfalken)}>
                                    +
                                </button>
                                /
                                <button className="App-small-btn">
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--2)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Triontaler
                            </p>
                            <h2>
                                TT 5
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn">
                                    +
                                </button>
                                /
                                <button className="App-small-btn">
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--3)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Kupferlinge
                            </p>
                            <h2>
                                KU 3
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn">
                                    +
                                </button>
                                /
                                <button className="App-small-btn">
                                    -
                                </button>
                            </div>
                        </div>
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--4)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Muena
                            </p>
                            <h2>
                                MU 9
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn">
                                    +
                                </button>
                                /
                                <button className="App-small-btn">
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                    <h3 style={{marginTop: "24px"}}>
                        Backpack Details
                    </h3>
                    <div className="App-container" style={{marginTop: "15px"}}>

                    </div>
                </div>

                <div>
                    <h3>
                        Inventory
                    </h3>
                    <div className="App-container" style={{marginTop: "15px", width: "100%"}}>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Backpack;