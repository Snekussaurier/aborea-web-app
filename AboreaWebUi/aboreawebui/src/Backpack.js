import { useState } from 'react';
import Tasks from './components/Item';

import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack';

const Backpack = () => {
    const [wallet, setWallet] = useState({goldfalken: 3, triontaler: 8, kupferlinge: 5, muena: 1});

    const changeGoldfalken = (ammount) => {
        if(wallet.goldfalken + ammount < 0){
            setWallet({...wallet, goldfalken: 0});
        }
        else{
        setWallet({...wallet, goldfalken: wallet.goldfalken + ammount});
        }
    }

    const changeTriontaler = (ammount) => {
        if(wallet.triontaler + ammount < 0){
            setWallet({...wallet, triontaler: 0});
        }
        else{
        setWallet({...wallet, triontaler: wallet.triontaler + ammount});
        }
    }

    const changeKupferlinge = (ammount) => {
        if(wallet.kupferlinge + ammount < 0){
            setWallet({...wallet, kupferlinge: 0});
        }
        else{
        setWallet({...wallet, kupferlinge: wallet.kupferlinge + ammount});
        }
    }

    const changeMuena = (ammount) => {
        if(wallet.muena + ammount < 0){
            setWallet({...wallet, muena: 0});
        }
        else{
        setWallet({...wallet, muena: wallet.muena + ammount});
        }
    }

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
                                GF {wallet.goldfalken}
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn" onClick={() => changeGoldfalken(1)}>
                                    +
                                </button>
                                /
                                <button className="App-small-btn" onClick={() => changeGoldfalken(-1)}>
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
                                TT {wallet.triontaler}
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn" onClick={() => changeTriontaler(1)}>
                                    +
                                </button>
                                /
                                <button className="App-small-btn" onClick={() => changeTriontaler(-1)}>
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
                                KU {wallet.kupferlinge}
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn" onClick={() => changeKupferlinge(1)}>
                                    +
                                </button>
                                /
                                <button className="App-small-btn" onClick={() => changeKupferlinge(-1)}>
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
                                MU {wallet.muena}
                            </h2>

                            <div className="App-backpack-content-horizontal" style={{height: "auto", width: "100%", marginTop: "10px"}}>
                                <button className="App-small-btn" onClick={() => changeMuena(1)}>
                                    +
                                </button>
                                /
                                <button className="App-small-btn" onClick={() => changeMuena(-1)}>
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
                        <Tasks/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Backpack;