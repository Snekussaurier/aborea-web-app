export const StepperBig = ({ value, header, backgroundColor}) => {

    const className = "App-container Horizontal " + backgroundColor;

    return (
        <div className={className}>
            <button onClick={console.log("decrease")} className='App-button '><h2>-</h2></button>
            <div className='Align-center'>
                <p>
                    {header}
                </p>
                <h1>{value}</h1>
            </div>
            <button onClick={console.log("increase")} className='App-button'><h2>+</h2></button>
        </div>
    )
}

export default StepperBig