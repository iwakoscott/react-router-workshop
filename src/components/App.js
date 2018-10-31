import React from "react";
import Helper from "./Helper";

function App(props) {
  return (
    <Helper>
      {({ ideas, handleAddIdea, handleVote }) => {
        return (
          <div>
            <h1>Welcome, to the React Router Workshop! 🚀</h1>
          </div>
        );
      }}
    </Helper>
  );
}

export default App;
