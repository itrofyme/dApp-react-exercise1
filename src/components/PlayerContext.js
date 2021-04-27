import { useState, createContext } from 'react'

export const PlayerContext = createContext();

export const PlayerProvider = props => {
    const [players, setPlayers] = useState({
        1 : {id: 1, color: undefined},
        2 : {id: 2, color: undefined},
        3 : {id: 3, color: undefined},
        4 : {id: 4, color: undefined}
    });

    return (
        <PlayerContext.Provider value={players}>
            {props.children}
        </PlayerContext.Provider>
    );
}