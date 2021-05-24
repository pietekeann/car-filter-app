import React from "react";
import { Slider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function ContinuousSlider(props) {
  const [value, setValue] = React.useState(2021);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const submitChange = () => {
    props.handler(value);
  };

  const muiTheme = createMuiTheme({
    overrides: {
      MuiSlider: {
        thumb: {
          color: "#9db740",
        },
        track: {
          color: "#9db740",
        },
        rail: {
          color: "#9db740",
        },
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={muiTheme}>
        <Slider
          value={value}
          onChange={handleChange}
          onMouseUp={submitChange}
          valueLabelDisplay="on"
          aria-labelledby="continuous-slider"
          min={1970}
          max={2021}
        />
      </ThemeProvider>
    </div>
  );
}

export default ContinuousSlider;
