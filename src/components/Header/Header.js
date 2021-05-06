import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Header.module.css";
import firebase from "../firebase";

const Header = ({
  user,
  handleLoginDialogOpen,
  handleLogOut,
  updateUserPhoto,
  avatarUrl,
}) => {
  const isLoggedIn = user !== null;
  const [image, setImage] = useState(null);

  console.log("avatarUrl", avatarUrl);

  const handleImageUpload = (event) => {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      setImage(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = firebase
      .storage()
      .ref("images/" + image.name)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log("upload error: ", error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            updateUserPhoto(url);
          });
      }
    );
  };

  if (image !== null) {
    handleUpload();
    setImage(null);
    console.log("uploading image");
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={styles.loginButton}>
          Game Lobby App
        </Typography>
        <Button
          color="inherit"
          onClick={handleLoginDialogOpen}
          style={{ display: isLoggedIn ? "none" : undefined }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          onClick={handleLogOut}
          style={{ display: !isLoggedIn ? "none" : undefined }}
        >
          Log Out
        </Button>
        <Button
          variant="contained"
          component="label"
          style={{ display: (avatarUrl || !user) ? "none" : undefined }}
        >
          Upload Avatar
          <input type="file" hidden onChange={handleImageUpload} />
        </Button>
        <Avatar
          src={avatarUrl}
          className={styles.avatar}
          style={{ display: !avatarUrl ? "none" : undefined }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
