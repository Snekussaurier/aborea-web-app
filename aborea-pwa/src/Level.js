import React from 'react';
import Header from './components/Header'

const Level = () => {
    return (
        <>
            <Header name="Level" />
            <div className="Horizontal" style={{ marginTop: "20px" }}>
                <h2>
                    Progressbar
                </h2>
                <div className="App-container-add-button-relative Electric-violet">
                    <p>
                        Add ep +
                    </p>
                </div>
            </div>
            <div className="App-container Background-grey Margin-right Horizontal">
                <div className="App-container Electric-violet">

                </div>
                <div>
                    <p>
                        Exp:
                    </p>
                    <h3>
                        123
                    </h3>
                    <h1>
                        3
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Level