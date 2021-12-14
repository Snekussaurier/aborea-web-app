export const StepperBig = ({ value, header, backgroundColor, onIncrement, onDecrement}) => {

    const className = "App-container Horizontal " + backgroundColor;

    return (
        <div className={className}>
            <button onMouseDown={onDecrement} className='App-button '><h2>-</h2></button>
            <div className='Align-center'>
                <p>
                    {header}
                </p>
                <h1>{value}</h1>
            </div>
            <button onClick={onIncrement} className='App-button'><h2>+</h2></button>
        </div>
    )
}

export default StepperBig