import React from 'react';
import Header from './components/Header'
import ProgressBar from './components/ProgressBar';

const Level = (character, setCharacter) => {

    const testData = {backgroundColor: 'linear-gradient(to left, #4776e6, #8e54e9)', value: 50}

    return (
        <>
            <Header name="Level" />
            <div className="Horizontal" style={{ marginTop: "20px" }}>
                <h2>
                    Progress
                </h2>
                <div className="App-container-add-button-relative Electric-violet">
                    <p>
                        Add ep +
                    </p>
                </div>
            </div>
            <div className="App-container Background-grey Margin-right Horizontal">
                <ProgressBar value={testData.value} backgroundColor={testData.backgroundColor}/>
                <div className='App-container-size'>
                    <p>
                        Level
                    </p>
                    <h1>
                        3
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Level