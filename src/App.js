import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  parent: {
    display: "flex",
    fontFamily: "Roboto"
  },
  child: {
    width: "60%",
    margin: "auto",
    background: 'linear-gradient(to right bottom, #EEEEE4, #E4EEEE)',
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.parent}>
      <Box className={classes.child}>
        <Header/>
        <Players />
      </Box>
    </Container>
  );
}

export default App;
