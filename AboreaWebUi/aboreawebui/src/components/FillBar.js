import React from 'react'

const FillBar = () =>{
    return (
        <div className = "Fill-bar Fill-bar-health">
            <div className="App-backpack-content-horizontal" style={{height: "100%", justifyContent: "right"}}>
                <button className="App-small-btn">
                    +
                </button>
                    /
                <button className="App-small-btn">
                    -
                </button>
            </div>
        </div>
    )
}

export default FillBar
