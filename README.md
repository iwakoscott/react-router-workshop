# React Router Workshop ⚡️

## at Sac Hacks 2018 🚀

### By Scott Iwako

Follow me on Twitter [@theisomorphic](https://twitter.com/theisomorphic)

---

### Step 01. Add Dynamic Pages! 🚀

[Open in CodeSandbox 📤](https://bit.ly/2Diy1Hl)

#### LEARNING GOALS 🥅

- [ ] Learn about the `render` prop pattern to add more control of what `Route` is rendering.
- [ ] Learn about the `.push` method on the `history` object.

### Instructions

1. Refactor `Add` component to include a `form` to add new ideas.
2. Build out a helper function to handle `form` submissions.
3. Pass the API method - `handleAddIdea` to the `Add` component using the `render` prop, and invoke it inside the `form`'s `onSubmit` handler.
4. Use the `history` `.push` method to push the user home after submitting an idea.
5. Refactor the `Home` component to show the ideas as an ordered list of `Link` components that take the user to the idea's voting page.
