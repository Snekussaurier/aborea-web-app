import UilBackpack from '@iconscout/react-unicons/icons/uil-backpack';
import UilWallet from '@iconscout/react-unicons/icons/uil-wallet'
import UilMoney from '@iconscout/react-unicons/icons/uil-yen-circle'

const Backpack = () => {
    return(
        <div className="App-backpack-content">
            <div className="App-content-header App-backpack">
                <UilBackpack size="80" className="App-content-header-icon"/>
                <h1>
                    Backpack
                </h1>
            </div>
            <div className="App-backpack-money">
                <div style={{display: "flex"}}>
                    <UilWallet size="25" style={{color: "var(--2)"}}/>
                    <h1 style={{marginLeft: "15px", color: "var(--2)"}}>
                        Geldbeutel
                    </h1>
                
                </div>

                <div className="App-backpack-money-container">
                    <h1 style={{color: "gray"}}>
                        Goldfalken
                    </h1>
                    <div style={{alignSelf: "flex-end"}}>
                        <h1 style={{marginLeft: "15px", fontSize: "32pt"}}>
                            30 GF
                        </h1>
                    </div>
                </div>
                <div className="App-backpack-money-container">
                    <h1 style={{color: "gray"}}>
                        Triontaler
                    </h1>
                    <div style={{alignSelf: "flex-end"}}>
                        <h1 style={{marginLeft: "15px", fontSize: "32pt"}}>
                            8 TT
                        </h1>
                    </div>
                </div>
                <div className="App-backpack-money-container">
                    <h1 style={{color: "gray"}}>
                        Kupferlinge
                    </h1>
                    <div style={{align: "flex-end"}}>
                        <h1 style={{marginLeft: "15px", fontSize: "32pt"}}>
                            11 KL
                        </h1>
                    </div>
                </div>
                <div className="App-backpack-money-container">
                    <h1 style={{color: "gray"}}>
                        Muena
                    </h1>
                    <div style={{alignSelf: "flex-end"}}>
                        <h1 style={{marginLeft: "15px", fontSize: "32pt"}}>
                            15 MU
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Backpack;