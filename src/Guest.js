import React from "react";
import { MyContext } from "./App";

function Guest() {
  return (
    <div>
      <h3>Guest Component</h3>
      <MyContext.Consumer>
        {({ data, handleClick }) => (
          <div>
            <h1>
              Name: {data.name}
              <br />
              Value: {data.value}
              <br />
            </h1>
            <button onClick={handleClick}>Chage Value</button>
          </div>
        )}
      </MyContext.Consumer>
    </div>
  );
}

export default Guest;
