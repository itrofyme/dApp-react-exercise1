import { useState } from 'react';
import ColorSelector from "../ColorSelector/ColorSelector";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from '@material-ui/core/Avatar';
import styles from "./Player.module.css";

const Player = ({ id }) => {
  const [ color, setColor ] = useState("");

  const changeAvatarColor = (color) => {
    setColor(color);
  }

  return (
    <Card className={styles.playerCard}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar className={styles.avatar} style={{backgroundColor: color}}>
              P{id}
            </Avatar>
          }
          title={"Player " + id}
        />
      </CardActionArea>
      <CardActions>
        <ColorSelector changeAvatarColor={changeAvatarColor}/>
      </CardActions>
    </Card>
  );
};

export default Player;
