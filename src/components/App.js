import React from "react";
import BlackBox from "./BlackBox";

function App(props) {
  return (
    <BlackBox>
      {({ ideas, callbacks }) => {
        return (
          <div>
            <h1>Welcome, to the React Router Workshop! ✨</h1>
          </div>
        );
      }}
    </BlackBox>
  );
}

export default App;
