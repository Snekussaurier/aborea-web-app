import UilTimes from '@iconscout/react-unicons/icons/uil-times';

const Gear = ({ gear, onDelete }) => {
    return (
        <div className="App-effect Armor-gradient">
            <div className="App-container-add-button" onClick={() => onDelete(gear.id)}>
                <UilTimes/>
            </div>
            <div className='Horizontal'>
            <h3>{gear.gearName}</h3> <h3>{gear.affects}: {gear.value}</h3>
            </div>
            <p>{gear.gearDescription}</p>
        </div>
    )
}

export default Gear
