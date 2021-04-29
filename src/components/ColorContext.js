import { createContext, Component } from "react";

const ColorContext = createContext();

class ColorProvider extends Component {
  state = {
    colors: {
      none: { value: "", code: "#FF5733", enabled: true },
      red: { value: "red", code: "#FF5733", enabled: true },
      green: { value: "green", code: "#2ECC71", enabled: true },
      blue: { value: "blue", code: "#2980B9", enabled: true },
      purple: { value: "purple", code: "#76448A", enabled: true },
    },
    toggleColor: () => {},
  };

  toggleColor = (selected, unselected) => {
    let newState = Object.assign({}, this.state);

    if (selected !== "") {
      newState.colors[selected].enabled = false;
    }
    if (unselected !== "") {
      newState.colors[unselected].enabled = true;
    }

    this.setState(newState);
  };

  render() {
    const { children } = this.props;
    const { colors } = this.state;
    const { toggleColor } = this;

    return (
      <ColorContext.Provider value={{ colors, toggleColor }}>
        {children}
      </ColorContext.Provider>
    );
  }
}

export default ColorContext;

export { ColorProvider };
