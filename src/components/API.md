# API Documentation

---

`getIdeas`

###### Parameters

None.

###### Return Value

An array of `idea` objects.

---

`handleAddIdea`

###### Parameters

- Parameter 1: `title` string
- Parameter 2: (Optional) `author` string

###### Return Value

A formatted `idea` object.

---

`handleVote`

###### Parameters

- Parameter 1: `id` string

###### Return Value

A function that takes in a single parameter - `sign` string (either `"+"` or `"-"`.) This function returns an `onClick` handler that increments or decrements the`idea`object with id`id`.

---

`getIdea`

###### Parameters

- Parameter 1: `id` string

###### Return Value

An idea object with id `id`

---

`setAuthUser`

###### Parameters

- Parameter 1: `authedUser` string

###### Return Value

`undefined`

---

`unsetAuthUser`

###### Parameters

None

###### Return Value

`undefined`

---

`getAuthUser`

###### Parameters

None

###### Return Value

A string of the currently authenticated username.
