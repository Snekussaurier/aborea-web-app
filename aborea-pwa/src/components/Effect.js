import UilTimes from '@iconscout/react-unicons/icons/uil-times';

const Effect = ({ effect, onDelete }) => {
    return (
        <div className="App-effect Effect-gradient">
            <div className="App-container-add-button" onClick={() => onDelete(effect.id)}>
                <UilTimes/>
            </div>
            <div className='Horizontal'>
            <h3>{effect.effectName}</h3> <h3>{effect.effectStat}: {effect.effectValue}</h3>
            </div>
            <p>{effect.effectDescription}</p>
        </div>
    )
}

export default Effect
