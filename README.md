# React Router Workshop ⚡️

## at Sac Hacks 2018 🚀

### By Scott Iwako

Follow me on Twitter [@theisomorphic](https://twitter.com/theisomorphic)

---

### Step 00. Setting up our Router and Components to render!

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

### Step 01. Add Dynamic Pages! 🚀

#### LEARNING GOALS 🥅

- [x] Learn about the `render` prop pattern to add more control of what `Route` is rendering.
- [x] Learn about the `.push` method on the `history` object.

### Instructions

1. Refactor `Add` component to include a `form` to add new ideas.
2. Build out a helper function to handle `form` submissions.
3. Pass the API's `handleAddIdea` method to the `Add` component using the `render` prop, to be used as a callback function invoked from the `onSubmit` handler for the `form`.
4. Find a way to send the user to `/` i.e. the homepage after the user submits the `form`.
5. Refactor the `Home` component to show the ideas as an ordered list of `Link`s that take the user to the idea's voting page. Add a ternary expression to show a message if no ideas have been added.
