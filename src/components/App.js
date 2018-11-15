import React from 'react';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';

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
                <Link to={'/jams/' + idea.id}>{idea.title}</Link>
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
          <NavLink exact activeClassName="activeStyle" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="activeStyle" to="/add">
            Add
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function Vote(props) {
  const id = props.match.params.id;
  const idea = props.getIdea(id);

  if (typeof idea === 'undefined') {
    return (
      <div>
        <h1>Looks like this idea isn't in our Database!</h1>
        <Link to="/add">How about adding one?</Link>
      </div>
    );
  }

  const addButtonBehavior = props.handleVote(id);

  return (
    <div>
      <h1>{idea.title}</h1>
      <h3>
        {idea.likes} {idea.likes > 0 ? '🌶' : idea.likes < 0 ? '💩' : '⭐️'}
      </h3>
      <section>
        <button onClick={addButtonBehavior('+')}>{'👍'}</button>
        <button onClick={addButtonBehavior('-')}>{'👎'}</button>
      </section>
    </div>
  );
}

function App({ handleAddIdea, getIdeas, getIdea, handleVote }) {
  const ideas = getIdeas();
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
              render={props => <Home ideas={ideas} {...props} />}
            />
            <Route
              path="/add"
              render={props => <Add handleAddIdea={handleAddIdea} {...props} />}
            />
            <Route
              path="/ideas/:id"
              render={props => (
                <Vote handleVote={handleVote} getIdea={getIdea} {...props} />
              )}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
