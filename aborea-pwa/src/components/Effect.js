import UilTimes from '@iconscout/react-unicons/icons/uil-times';

const Effect = ({ effect, onDelete }) => {
    return (
        <div className="App-effect Armor-gradient">
            <div className="App-container-add-button" onClick={() => onDelete(effect.id)}>
                <UilTimes/>
            </div>
            <h3>{effect.effectName}</h3>
            <p>{effect.effectDescription}</p>
        </div>
    )
}

export default Effect
