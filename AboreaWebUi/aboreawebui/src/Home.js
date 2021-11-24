import React from "react";
import image from './img/Bard.png';
import UilEstate from '@iconscout/react-unicons/icons/uil-estate'
import FillBar from "./components/FillBar";

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
                <img src={image} className="Char-image"/>
                <div>
                    <h3>
                        Statistics
                    </h3>
                    <p style={{marginTop: "20px", marginBottom: "0px"}}>
                        Trefferpunkte
                    </p>
                    <FillBar/>
                    <p style={{marginTop: "20px", marginBottom: "0px"}}>
                        Manapunkte
                    </p>
                    <div style={{width: "calc(100% - 20px)", height: "50px", borderRadius: "25px", backgroundColor: "var(--1)", marginTop: "5px"}}>

                    </div>
                    <div className="App-backpack-content-horizontal">
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--2)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Rüstung
                            </p>
                            <h2>
                                RB 5
                            </h2>
                        </div>
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--3)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Initiative
                            </p>
                            <h2>
                                INI 12
                            </h2>
                        </div>
                    </div>
                    <div className="App-backpack-content-horizontal">
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--4)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Kampfbonus
                            </p>
                            <h2>
                                KB 5
                            </h2>
                        </div>
                        <div className="App-backpack-content-currency App-container">
                            <div className="App-symbol-background" style={{backgroundColor: "var(--5)"}}>

                            </div>
                            <p style={{marginTop: "24px"}}>
                                Schaden
                            </p>
                            <h2>
                                DM 3
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;