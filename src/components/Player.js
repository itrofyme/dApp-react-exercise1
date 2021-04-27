import ColorSelector from './ColorSelector'
import { useState, useContext } from 'react'
import { PlayerContext } from './PlayerContext';


const Player = ({ player }) => {
    const players = useContext(PlayerContext);
    const [ backgroundColor, setColor ] = useState();

    const onColorChange = (e) => {
        const newColor = e.target.value;
        var usedColors = [];
        for (var id in players) {
            usedColors.push(players[id].color)
        }
        
        if (!Object.values(usedColors).includes(newColor) || newColor === "none") {
            setColor(newColor);
            players[player.id].color = newColor;
        }
    }

    return (
        <>
            <div className='player' style={{backgroundColor: backgroundColor}}>
                <h3>P{player.id}</h3>
                <ColorSelector onColorChange={onColorChange} selectedColor={backgroundColor}/>
            </div>
        </>
    )
}

export default Player
