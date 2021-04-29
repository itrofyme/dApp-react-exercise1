import { useState, useContext } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ColorContext from "../ColorContext";
import styles from "./ColorSelector.module.css";

const ColorSelector = ({changeAvatarColor}) => {
  const [chosenOption, setChosenOption] = useState("");
  const { colors, toggleColor } = useContext(ColorContext);

  const onChange = (e) => {
    setChosenOption(e.target.value);
    toggleColor(e.target.value, chosenOption);
    changeAvatarColor(e.target.value);
  };

  return (
    <Box mx="1rem" mb="1rem" width="100%">
      <FormControl className={styles.Form}>
        <InputLabel>Color</InputLabel>
        <Select
          className={styles.Select}
          value={chosenOption}
          onChange={onChange}
        >
          {Object.entries(colors).map(([name, color]) => (
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
