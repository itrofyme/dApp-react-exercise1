import Player from "../Player/Player";
import Box from "@material-ui/core/Box";
import styles from "./Players.module.css";

const Players = ({ user, fetchedColors, colorsInUse, changeColor }) => {
  if (user === null) {
    return null;
  } else {
    return (
      <Box className={styles.playersWrapper}>
        {Object.entries(fetchedColors).map(([id, color]) => (
          <Player
            key={id}
            id={id}
            user={user}
            fetchedColor={color.color}
            colorsInUse={colorsInUse}
            changeColor={changeColor}
          />
        ))}
      </Box>
    );
  }
};

export default Players;
