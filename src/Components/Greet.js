import React from "react";

function Greet(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      {props.children}
    </div>
  );
}

// const Greet1 = () => {
//   return <h1>Hello Singhal</h1>;
// };

export { Greet };
