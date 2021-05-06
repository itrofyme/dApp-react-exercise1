import { useState, useContext } from "react";
import ColorSelector from "../ColorSelector/ColorSelector";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import styles from "./Player.module.css";

const Player = ({ id, user, fetchedColor, colorsInUse, changeColor }) => {
  const [ color, setColor ] = useState(fetchedColor);

  const changeAvatarColor = (color) => {
    setColor(color);
    changeColor(id, color);
  };

  const isMe = id == user.email.substring(6, 7);

  return (
    <Card
      className={styles.playerCard}
      raised={isMe}
      style={{ backgroundColor: isMe ? "#e6eeff" : undefined }}
    >
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              className={styles.avatar}
              style={{ backgroundColor: color }}
            >
              P{id}
            </Avatar>
          }
          title={"Player " + id}
        />
      </CardActionArea>
      <CardActions>
        <ColorSelector
          isMe={isMe}
          changeAvatarColor={changeAvatarColor}
          color={color}
          colorsInUse={colorsInUse}
        />
      </CardActions>
    </Card>
  );
};

export default Player;
