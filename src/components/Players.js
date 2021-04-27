import { useContext } from 'react';
import Player from './Player'
import { PlayerContext } from './PlayerContext';

const Players = () => {
    const players = useContext(PlayerContext);
    console.log("players:", players);

    var rows = [];
    for (var player in players) {
        rows.push(<Player player={players[player]}/>);
    }
    return <div>{rows}</div>;
}

export default Players