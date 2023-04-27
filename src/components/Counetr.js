import React, { useContext, useState } from "react";
import { userContext } from "../App";

function Counetr() {
  let data = useContext(userContext);
  const [value, setValue] = useState(data);
  function increment() {
    setValue(value + 1);
  }
  return (
    <div>
      Counetr:{value}
      <button onClick={increment}> click</button>
    </div>
  );
}

export default Counetr;
