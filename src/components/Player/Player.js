import { makeStyles } from "@material-ui/core/styles";
import ColorSelector from "../ColorSelector/ColorSelector";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react'

const useStyles = makeStyles({
  root: {
    width: 300,
    marginBottom: 40,
    marginLeft: 15,
    marginRight: 15
  },
  media: {
    height: 30,
  },
  avatar: {
    fontSize: 14,
    backgroundColor: "black",
    color: "white"
  },
});

const Player = ({ player }) => {
  const classes = useStyles();
  const [ color, setColor ] = useState("");

  const changeAvatarColor = (color) => {
    setColor(color);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} style={{backgroundColor: color}}>
              P{player.id}
            </Avatar>
          }
          title={"Player " + player.id}
        />
      </CardActionArea>
      <CardActions>
        <ColorSelector changeAvatarColor={changeAvatarColor}/>
      </CardActions>
    </Card>
  );
};

export default Player;
