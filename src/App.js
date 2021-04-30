import React from "react";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import Container from "@material-ui/core/Container";
import styles from "./App.css";

function App() {
  return (
    <Container className={styles.root} maxWidth="sm">
      <Header/>
      <Players />
    </Container>
  );
}

export default App;
