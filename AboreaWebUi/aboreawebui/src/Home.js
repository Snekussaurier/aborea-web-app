import React from "react";
import image from './img/Bard.png';
import UilEstate from '@iconscout/react-unicons/icons/uil-estate'

const Home = () => {
    return(
        <div>
            <div className="App-content-header App-home">
                <UilEstate size="56" className="App-content-header-icon"/>
                <h1>
                    Dashboard
                </h1>
            </div>
            <div className="App-backpack-content"> 
                <div>
                    <h3>
                        Statistics
                    </h3>
                    <div className="App-backpack-content-horizontal">
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--1)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Trefferpunkte
                            </p>
                            <h2>
                                TP 12
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
                            <div className="App-symbol-background" style={{backgroundColor: "var(--2)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Rüstung
                            </p>
                            <h2>
                                RB 5
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
                                Manapunkte
                            </p>
                            <h2>
                                MP 3
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

                    <div className="App-backpack-content-horizontal">
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--4)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Initiative
                            </p>
                            <h2>
                                INI 12
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
                            <div className="App-symbol-background" style={{backgroundColor: "var(--5)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Kampfbonus
                            </p>
                            <h2>
                                KB 5
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
                            <div className="App-symbol-background" style={{backgroundColor: "var(--6)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Schaden
                            </p>
                            <h2>
                                DM 3
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
                        Gear
                    </h3>
                </div>

                <div>
                    <img src={image} style={{height: "90vh", marginRight: "20px"}}/>
                </div>

                <div>
                    <h3>
                        Player Effects
                    </h3>
                </div>
            </div>
        </div>
    );
}
export default Home;