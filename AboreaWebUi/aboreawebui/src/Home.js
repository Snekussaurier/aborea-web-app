import React from "react";
import image from './img/Bard.png';

const Home = () => {
    return(
        <div>
            <div className="App-content-char">
                <div className="App-content-char-center"/>
                <img src={image} className="Char-image"/>
            </div>
        </div>
    );
}
export default Home;