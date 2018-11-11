# React Router Workshop ⚡️

## at Sac Hacks 2018 🚀

### By Scott Iwako

Follow me on Twitter [@theisomorphic](https://twitter.com/theisomorphic)

---

### ✅ Step 00. Setting up our Router and Components to render!

[Open in CodeSandbox 📤](https://bit.ly/2PRkYmG)

#### LEARNING GOALS 🥅

- [x] Download `react-router-dom` as a dependency

Learn about `react-router-dom`'s

- [x] `BrowserRouter`
- [x] `Route`
- [x] `Link`
- [x] `Switch`
- [x] `location` object

### Instructions

1. Add `react-router-dom` as dependency
2. Set up `BrowserRouter`
3. Add first two `Route`'s and build out corresponding components to render.
4. Add `NavBar` component.
5. Build out 404 Error component and try to figure out a `path` for the `Route`
6. Add `Switch` component to the application.

---

### ✅ Step 01. Add Dynamic Pages! 🚀

[Open in CodeSandbox 📤](https://bit.ly/2Diy1Hl)

#### LEARNING GOALS 🥅

- [x] Learn about the `render` prop pattern to add more control of what `Route` is rendering.
- [x] Learn about the `.push` method on the `history` object.

### Instructions

1. Refactor `Add` component to include a `form` to add new ideas.
2. Build out a helper function to handle `form` submissions.
3. Pass the API method - `handleAddIdea` to the `Add` component using the `render` prop, and invoke it inside the form's `onSubmit` handler.
4. Find a way to send the user to `/` i.e. the homepage after the user submits the `form`.
5. Refactor the `Home` component to show the ideas as an ordered list of `Link`s that take the user to the idea's voting page. Add a ternary expression to show a message if no ideas have been added.

---

### ✅ Step 02. Add a Jam Idea Voting Page 🎟

[Open in CodeSandbox 📤](https://bit.ly/2AZBAjV)

#### LEARNING GOALS 🥅

- [x] Learn about how to add URL parameters.
- [x] Learn about the `match` object.

### Instructions

1. Add a new `Route` to catch the `/jams/<unique-id>`.
2. Build out the `Vote` component to be rendered at `/jams/<unique-id>`.
3. Use the `getIdea` and `handleVote` API methods to render the idea's `likes` and `title` data, and add the `button` click behavior, respectively.
4. Add a conditional to handle ideas `id`'s that are not in our backend.

---

### ✅ Step 03. Polish up the Application 💅

[Open in CodeSandbox 📤](https://bit.ly/2RMTagB)

#### LEARNING GOALS 🥅

- [x] Learn about the `NavLink` component.

### Instructions

1. Add `activeStyle` to the navigation links so that when clicked the styling of the link changes accordingly.
2. `.sort` the ideas on the front page in ascending order by number of likes.
3. Add emojis next to the like number depending on the like count. _For example, if the like count is less than 0 we display a 💩, equal to zero - ⭐️, and greater than zero - 🌶._

---

### ✅ Step 04. BONUS (ADVANCED) Add Private Routing! 🔒

[Open in CodeSandbox 📤](https://bit.ly/2zJKccI)

#### LEARNING GOALS 🥅

- [x] Learn about Higher Order Components
- [x] Learn about the `Redirect` component
- [x] Learn about how to pass state into `Redirect`.

### Instructions

1. Add a `Login` component that will render a `form` with a dropdown menu of usernames.
2. Invoke the `auth.setAuthUser` API method inside the `form`'s `onSubmit` handler function.
3. Add the `auth.unsetAuthUser` API method as the `onClick` handler on the logout button. Additionally, show the `authUser` name somewhere in the `NavBar`.
4. Build a Higher Order Component called `PrivateRoute` that invokes the `render` callback if the user is authenticated otherwise, return a `Redirect` component to take the user to the login page.
5. Add the `authUser` to the second argument of `handleAddIdea` inside of the `Add` component's `onSubmit` handler. Display the `author` inside of the `Vote` component.
6. Pass referrer state into the `Redirect` component rendered by `PrivateRoute` so that after logging into the application the user is redirected to the originally requested page instead of `/`.

### ✅Complete!
[Open in CodeSandbox 📤](https://bit.ly/2OAspKt)
