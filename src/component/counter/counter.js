import React from "react";
import Button from "@material-ui/core/Button";

function Counter() {
  const [number, setNumber] = React.useState(0);
  const naik = function() {
    setNumber(number + 1);
  };
  const turun = function() {
    setNumber(number - 1);
  };
  return (
    <div>
      {{}}
      <h1>{number}</h1>
      <Button variant="contained" color="secondary" onClick={naik}>
        +
      </Button>
      <Button variant="contained" color="primary" onClick={turun}>
        -
      </Button>
    </div>
  );
}

export default Counter;
