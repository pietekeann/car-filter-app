import React from "react";

function DropDown(props) {
  const [type, setType] = React.useState("Car");

  let data = props.data.map((item, i) => <option key={i}>{item}</option>);

  return (
    <div>
      <select
        value={type}
        onChange={(e) => {
          props.handler(e);
          setType(e.target.value);
        }}
      >
        {data}
      </select>
    </div>
  );
}

export default DropDown;
