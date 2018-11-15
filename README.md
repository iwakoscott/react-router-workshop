# React Router Workshop ⚡️

## at Sac Hacks 2018 🚀

### By Scott Iwako

Follow me on Twitter [@theisomorphic](https://twitter.com/theisomorphic)

---

### Step 04. BONUS (ADVANCED) Add Private Routing! 🔒

[Open in CodeSandbox 📤](https://bit.ly/2zJKccI)

#### LEARNING GOALS 🥅

- [ ] Learn about Higher Order Components
- [ ] Learn about the `Redirect` component
- [ ] Learn about how to pass state into `Redirect`.

### Instructions

1. Add a `Login` component that will render a `form` with a dropdown menu of usernames.
2. Invoke the `auth.setAuthUser` API method inside the `form`'s `onSubmit` handler function.
3. Add the `auth.unsetAuthUser` API method as the `onClick` handler on the logout button. Additionally, show the `authUser` name somewhere in the `NavBar`.
4. Build a Higher Order Component called `PrivateRoute` that invokes the `render` callback if the user is authenticated otherwise, return a `Redirect` component to take the user to the login page.
5. Add the `authUser` to the second argument of `handleAddIdea` inside of the `Add` component's `onSubmit` handler. Display the `author` inside of the `Vote` component.
6. Pass referrer state into the `Redirect` component rendered by `PrivateRoute` so that after logging into the application the user is redirected to the originally requested page instead of `/`.
