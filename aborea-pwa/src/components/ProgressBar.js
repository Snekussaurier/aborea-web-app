export const ProgressBar = ({value, backgroundColor}) => {

    const fillStyle = {
        height: '100%',
        width: `${value}%`,
        background: backgroundColor,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box'
    }

    return (
        <div className='App-progressbar-background'>
            <div style={fillStyle}>
                <h3 style={{margin: '0 10px'}}>{value}%</h3>
            </div>
        </div>
    )
}

export default ProgressBar