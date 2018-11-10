import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';

function Home(props) {
  const ideas = props.ideas;
  const byLikes = (a, b) => b.likes - a.likes;
  return (
    <div>
      <h1>The Jam Idea App! {'🐻'}</h1>
      <section>
        {ideas.length > 0 ? (
          <ol>
            {ideas.sort(byLikes).map(idea => (
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
    props.handleAddIdea(title, props.authUser);
    input.value = '';
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
        {props.authUser !== null ? (
          <li>
            Welcome, {props.authUser}!{' '}
            <button onClick={props.logout}>LOGOUT</button>
          </li>
        ) : null}
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

  const vote = props.handleVote(id);

  return (
    <div>
      <h1>{idea.title}</h1>
      <h3>
        {idea.likes} {idea.likes > 0 ? '🌶' : idea.likes < 0 ? '💩' : '⭐️'}
      </h3>
      <h6>Added by {idea.author}</h6>
      <section>
        <button onClick={vote('+')}>{'👍'}</button>
        <button onClick={vote('-')}>{'👎'}</button>
      </section>
    </div>
  );
}

function Login(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const user = event.target.elements[0].value;
    props.login(user);

    const { from } = props.location.state || { from: { pathname: '/' } };
    props.history.push(from.pathname);
  };

  return (
    <div>
      <h1>Please login to use the application!</h1>
      <form onSubmit={handleSubmit}>
        <select>
          <option value="Paddington">Paddington</option>
          <option value="AuntLucy">AuntLucy</option>
          <option value="Scott93">Scott93</option>
        </select>
        <button>LOGIN</button>
      </form>
    </div>
  );
}

function PrivateRoute({ to, render, authUser, ...rest }) {
  const isAuthed = authUser !== null;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthed ? (
          render({ ...props, authUser })
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function App({ handleAddIdea, getIdeas, getIdea, handleVote, auth }) {
  const authUser = auth.getAuthUser();
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar authUser={authUser} logout={auth.unsetAuthUser} />
          <hr />
          <Switch>
            <PrivateRoute
              exact
              authUser={authUser}
              path="/"
              render={props => <Home ideas={getIdeas()} {...props} />}
            />
            <PrivateRoute
              authUser={authUser}
              path="/add"
              render={props => <Add handleAddIdea={handleAddIdea} {...props} />}
            />
            <PrivateRoute
              authUser={authUser}
              path="/jams/:id"
              render={props => (
                <Vote handleVote={handleVote} getIdea={getIdea} {...props} />
              )}
            />
            <Route
              path="/login"
              render={props => <Login login={auth.setAuthUser} {...props} />}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
