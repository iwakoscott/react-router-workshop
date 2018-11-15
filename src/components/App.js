import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function Home(props) {
  const ideas = props.ideas;
  return (
    <div>
      <h1>The Jam Idea App! {'🐻'}</h1>
      <section>
        {ideas.length > 0 ? (
          <ol>
            {ideas.map(idea => (
              <li key={idea.id}>
                <Link to={'/ideas/' + idea.id}>{idea.title}</Link>
              </li>
            ))}
          </ol>
        ) : (
          'Looks like no ideas have been added!'
        )}
      </section>
    </div>
  );
}

function Add(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const input = event.target.elements[0];
    const title = input.value;
    props.handleAddIdea(title);
    props.history.push('/');
  };
  return (
    <div>
      <h1>Add a Recipe Idea</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

function Error(props) {
  return (
    <div>
      <h1>404 Error: Page Not Found</h1>
      <p>
        It looks like <code>{props.location.pathname}</code> doesn't exist!
      </p>
      <Link to="/">Take me back to safety!</Link>
    </div>
  );
}

function NavBar(props) {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </nav>
  );
}

function App({ handleAddIdea, getIdeas }) {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <hr />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home ideas={getIdeas()} {...props} />}
            />
            <Route
              path="/add"
              render={props => <Add handleAddIdea={handleAddIdea} {...props} />}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
