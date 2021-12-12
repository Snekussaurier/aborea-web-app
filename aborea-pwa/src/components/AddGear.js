import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { useState } from 'react';

const AddGear = ({ onAdd, onClose }) => {
    const [gearName, setGearName] = useState('')
    const [gearDescription, setGearDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!gearName) {
            return
        }

        onAdd({ gearName, gearDescription })

        setGearName('')
        setGearDescription('')
        onClose()

    }

    return (
        <form className="App-form" onSubmit={onSubmit}>
            <div className="App-form-container">
                <h1>Deploy new gear</h1>
                <div>
                    <h3>Inventory</h3>
                    <select value="Select gear piece" className='App-form-select'>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                    </select>
                </div>
                <input type="submit" value="Deploy gear" className='App-form-input-submit Electric-violet' />
                <div className="App-container-add-button" onClick={onClose}>
                    <UilTimes />
                </div>
            </div>
        </form>
    )
}

export default AddGear
