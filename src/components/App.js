import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Home(props){
  return <h1>Home</h1>
}

function Add(props){
  return <h1>Add a Recipe Idea</h1>
}

function Error(props){
  return (
    <div>
      <h1>404 Error: Page Not Found</h1>
      <p>It looks like <code>{props.location.pathname}</code> doesn't exist!</p>
      <Link to="/">Take me back to safety!</Link>
    </div>
  );
}

function NavBar(props){
  return (
   <nav>
     <ul className="navbar">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/add">Add</Link></li>
     </ul>
   </nav>
  );
}

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={Add} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
