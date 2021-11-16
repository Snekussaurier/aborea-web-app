import React from "react";
import image from './img/BardHalf.png';
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
        </div>
    );
}
export default Home;