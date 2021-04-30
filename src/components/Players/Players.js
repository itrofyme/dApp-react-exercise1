import Player from "../Player/Player";
import Box from "@material-ui/core/Box";
import { ColorProvider } from "../ColorContext";
import styles from "./Players.module.css";

const Players = () => {
  const players = {
    1: { id: 1},
    2: { id: 2},
    3: { id: 3},
    4: { id: 4},
  };

  return (
    <ColorProvider>
      <Box className={styles.playersWrapper}>
        {Object.entries(players).map(([id, player]) => (
          <Player key={id} id={player.id} />
        ))}
      </Box>
    </ColorProvider>
  );
};

export default Players;
