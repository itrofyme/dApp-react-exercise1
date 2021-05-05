import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import styles from "./Header.module.css";

const Header = ({ user, handleLoginDialogOpen, handleLogOut }) => {
  const isLoggedIn = user !== null;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={styles.loginButton}>
          Game Lobby App
        </Typography>
        <Button color="inherit" onClick={handleLoginDialogOpen} style={{ display: isLoggedIn ? 'none' : undefined }}>Login</Button>
        <Button color="inherit" onClick={handleLogOut} style={{ display: !isLoggedIn ? 'none' : undefined }}>Log Out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
