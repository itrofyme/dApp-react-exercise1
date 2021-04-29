import Player from "../Player/Player";
import Box from "@material-ui/core/Box";
import { ColorProvider } from "../ColorContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  parent: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: 40
  }
});

const Players = () => {
  const classes = useStyles();

  const players = {
    1: { id: 1},
    2: { id: 2},
    3: { id: 3},
    4: { id: 4},
  };

  return (
    <ColorProvider>
      <Box className={classes.parent}>
        {Object.entries(players).map(([id, player]) => (
          <Box key={id}>
            <Player player={player} />
          </Box>
        ))}
      </Box>
    </ColorProvider>
  );
};

export default Players;
