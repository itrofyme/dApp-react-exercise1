import { useState, useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./ColorSelector.module.css";

const ColorSelector = ({isMe, changeAvatarColor, color, colorsInUse }) => {
  const onChange = (e) => {
    changeAvatarColor(e.target.value);
  };

  return (
    <Box mx="1rem" mb="1rem" width="100%">
      <FormControl className={styles.Form}>
        <InputLabel>Color</InputLabel>
        <Select
          className={styles.Select}
          value={color}
          onChange={onChange}
          disabled={!isMe}
        >
          {Object.entries(colorsInUse).map(([name, color]) => (
            <MenuItem key={name} value={color.value} disabled={!color.enabled}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ColorSelector;
