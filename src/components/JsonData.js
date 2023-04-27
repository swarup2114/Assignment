import { useState, useEffect } from "react";

function JsonData() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((value) => setValue(value.data));
  }, []);
  return (
    <div>
      NewApiData
      {value.map((item, index) => (
        <div key={index} className="class1">
          <img src={item.avatar} alt={item.email} />
        </div>
      ))}
    </div>
  );
}

export default JsonData;
