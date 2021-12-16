import React from 'react';
import Header from './components/Header'
import StepperBig from './components/StepperBig';
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';

const Statistic = (character, setCharacter) => {

    const bonusCalc = (value) => {
        let res
        if(value - 5 < 0){
            res = Math.floor((value - 5) / 2)
        }
        else{
            res = Math.ceil((value - 5) / 2)
        }
        return res
    }

    return (
        <>
            <Header name="Statistic" />
            <h2>
                Attributes
            </h2>
            <div className="Horizontal">
                 <StepperBig value={"5"} header={"Strength"} backgroundColor={"Background-grey Margin-right"}/>
                 <div className='App-container-size Background-grey Margin-left'>
                    <p>Bonus</p>
                    <h1>{bonusCalc(5)}</h1>
                 </div>
            </div>
            <div className="Horizontal">
                 <StepperBig value={"7"} header={"Dexterity"} backgroundColor={"Background-grey Margin-right"}/>
                 <div className='App-container-size Background-grey Margin-left'>
                    <p>Bonus</p>
                    <h1>{bonusCalc(7)}</h1>
                 </div>
            </div>
            <div className="Horizontal">
                 <StepperBig value={"6"} header={"Constitution"} backgroundColor={"Background-grey Margin-right"}/>
                 <div className='App-container-size Background-grey Margin-left'>
                    <p>Bonus</p>
                    <h1>{bonusCalc(6)}</h1>
                 </div>
            </div>
            <div className="Horizontal">
                 <StepperBig value={"6"} header={"Intelligence"} backgroundColor={"Background-grey Margin-right"}/>
                 <div className='App-container-size Background-grey Margin-left'>
                    <p>Bonus</p>
                    <h1>{bonusCalc(6)}</h1>
                 </div>
            </div>
            <div className="Horizontal">
                 <StepperBig value={"8"} header={"Charisma"} backgroundColor={"Background-grey Margin-right"}/>
                 <div className='App-container-size Background-grey Margin-left'>
                    <p>Bonus</p>
                    <h1>{bonusCalc(8)}</h1>
                 </div>
            </div>
            <h2>
                Skills
            </h2>
            <table>
                <tr><td>Athletic</td><td>1</td><td><UilEllipsisV/></td></tr>
                <tr><td>Influence</td><td>3</td><td><UilEllipsisV/></td></tr>
                <tr><td>Targeted spell</td><td>0</td><td><UilEllipsisV/></td></tr>
                <tr><td>Cunning</td><td>3</td><td><UilEllipsisV/></td></tr>
                <tr><td>Develop magic</td><td>0</td><td><UilEllipsisV/></td></tr>
                <tr><td>Nature</td><td>2</td><td><UilEllipsisV/></td></tr>
                <tr><td>Horse riding</td><td>3</td><td><UilEllipsisV/></td></tr>
            </table>
        </>
    );
}

export default Statistic