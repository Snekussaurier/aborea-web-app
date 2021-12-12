import UilTimes from '@iconscout/react-unicons/icons/uil-times';
import { useState } from 'react';

const AddEffect = ({onAdd, onClose, listStats }) => {
    const [effectName, setEffectName] = useState('')
    const [effectDescription, setEffectDescription] = useState('')
    const [effectStat, setEffectStat] = useState('')
    const [effectValue, setEffectValue] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!effectName) {
            return
        }

        onAdd({ effectName, effectDescription, effectStat, effectValue })

        setEffectName('')
        setEffectDescription('')
        setEffectStat('')
        setEffectStat('')
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
                <div>
                    <h3>Effect affection</h3>
                    <select placeholder="Select gear piece" className='App-form-select' value={effectStat} onChange={(e) => setEffectStat(e.target.value)}>
                        {listStats.map((listItem) => <option value={listItem.id}>{listItem.id}</option>)}
                    </select>
                </div>
                <div>
                    <h3>Value</h3>
                    <input type="number" placeholder='Effect value' min="-10" max="10" className='App-form-input-text' onChange={(e) => setEffectValue(e.target.value)}></input>
                </div>
                <input type="submit" value="Save effect" className='App-form-input-submit Electric-violet' />
                <div className="App-container-add-button" onClick={onClose}>
                    <UilTimes />
                </div>
            </div>
        </form>
    )
}

export default AddEffect
