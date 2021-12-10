import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { useState } from 'react';

const AddEffect = ({onAdd, onClose}) => {
    const [effectName, setEffectName] = useState('')
    const [effectDescription, setEffectDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!effectName){
            return
        }

        onAdd({effectName, effectDescription})

        setEffectName('')
        setEffectDescription('')
        onClose()

    }

    return (
        <form className="App-form" onSubmit={onSubmit}>
            <div className="App-form-container">
                <h1>Add new effect</h1>
                <div>
                    <h3>Effect name</h3>
                    <input type='text' placeholder="Effect name" value={effectName} onChange={(e) => setEffectName(e.target.value)} className='App-form-input-text'></input>
                </div>
                <div>
                    <h3>Effect description</h3>
                    <input type='text' placeholder="Effect description" value={effectDescription} onChange={(e) => setEffectDescription(e.target.value)} className='App-form-input-text'></input>
                </div>
                <input type="submit" value="Save effect" className='App-form-input-submit Electric-violet'/>
                <div className="App-container-add-button" onClick={onClose}>
                    <UilTimes/>
                </div>
            </div>
        </form>
    )
}

export default AddEffect
