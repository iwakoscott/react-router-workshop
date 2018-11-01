import React from 'react';
import API from './API';

function App(props) {
  return (
    <API>
      {methods => {
        return (
          <div>
            <h1>Welcome, to the React Router Workshop! ✨</h1>
          </div>
        );
      }}
    </API>
  );
}

export default App;
