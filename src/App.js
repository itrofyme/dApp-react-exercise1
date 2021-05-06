import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Players from "./components/Players/Players";
import LoginDialog from "./components/LoginDialog/LoginDialog";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import styles from "./App.css";
import firebase from "./components/firebase";

function App() {
  const initColorsInUse = {
    none: { value: "", enabled: true },
    red: { value: "red", enabled: true },
    green: { value: "green", enabled: true },
    blue: { value: "blue", enabled: true },
    purple: { value: "purple", enabled: true },
  };

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [fetchedColors, setFetchedColors] = useState([]);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [colorsInUse, setColorsInUse] = useState(
    JSON.parse(JSON.stringify(initColorsInUse))
  );

  const ref = firebase.firestore().collection("player_colors");

  function fetchColors() {
    setInitializing(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items[doc.id] = doc.data();
      });
      console.log("items : ", items);
      setFetchedColors(items);
    });
  }

  function getUserAvatarUrl() {
    if (user && fetchedColors.length) {
      let playerId = user.email.substring(6, 7);
      console.log("setting avatar_url", fetchedColors[playerId]["avatar_url"]);
      setAvatarUrl(fetchedColors[playerId]["avatar_url"]);
    }
  }

  function updateUserPhoto(url) {
    const callableReturnMessage = firebase
      .functions()
      .httpsCallable("updateUserPhoto");
    let playerId = user.email.substring(6, 7);
    callableReturnMessage({ playerId: playerId, image: url })
      .then((result) => {
        console.log("result: ", result.data);
      })
      .catch((error) => {
        console.log("error: ", JSON.stringify(error));
      });
  }

  function updateColorsInUseState() {
    let newColorsInUse = JSON.parse(JSON.stringify(initColorsInUse));
    for (const [colorId, colorObj] of Object.entries(colorsInUse)) {
      for (const [playerId, fetchedColorObj] of Object.entries(fetchedColors)) {
        if (colorId === fetchedColorObj.color) {
          console.log("colorId ", colorId, " is disabled");
          newColorsInUse[colorId].enabled = false;
          break;
        }
      }
    }
    setColorsInUse(newColorsInUse);
  }

  function changeColor(playerId, colorName) {
    var docRef = ref.doc(playerId.toString());

    return docRef
      .update({
        color: colorName,
      })
      .then(() => {
        console.log("updated player", playerId, " to ", colorName);
      })
      .catch((error) => {
        console.error("error updating color: ", error);
      });
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    fetchColors();
  }, []);

  useEffect(() => {
    const auth = firebase.apps[0].auth();
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    updateColorsInUseState();
    getUserAvatarUrl();
    if (initializing) setInitializing(false);
  }, [user, fetchedColors]);

  const handleLoginDialogOpen = () => {
    setIsLoginOpen(true);
  };

  const handleLoginDialogClose = () => {
    setIsLoginOpen(false);
  };

  const handleLogOut = () => {
    const auth = firebase.apps[0].auth();
    auth.signOut();
    setAvatarUrl(null);
  };

  if (initializing) {
    return <Typography variant="h6">Loading...</Typography>;
  } else {
    return (
      <>
        <Container className={styles.root} maxWidth="sm">
          <Header
            user={user}
            handleLoginDialogOpen={handleLoginDialogOpen}
            handleLogOut={handleLogOut}
            updateUserPhoto={updateUserPhoto}
            avatarUrl={avatarUrl}
          />
          <Players
            user={user}
            fetchedColors={fetchedColors}
            colorsInUse={colorsInUse}
            changeColor={changeColor}
          />
        </Container>
        <LoginDialog
          isOpen={isLoginOpen}
          handleClose={handleLoginDialogClose}
        ></LoginDialog>
      </>
    );
  }
}

export default App;
