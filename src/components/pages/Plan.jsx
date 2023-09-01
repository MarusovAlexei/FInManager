import React, { useState, useEffect } from "react";

const Plan = () => {
  const [data, setData] = useState({ name: "nik", age: 14 });

  const change = () => {
    setData({ ...data, age: 20 });
  };

  useEffect(() => {}, [data.age]);

  return (
    <React.Fragment>
      <span
        style={{ display: "block", marginTop: "100px", marginLeft: "100px" }}
      >
        {data.name}
      </span>
      <span
        style={{ display: "block", marginTop: "100px", marginLeft: "100px" }}
      >
        {data.age}
      </span>
      <button onClick={change}>Изменить</button>
    </React.Fragment>
  );
};

export default Plan;
