import React from "react";

/*
  Idea Schema:
  {
    id,
    author: "",
    title: "",
    likes: ""
  }
*/

export default class Helper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [{ id: 1, title: "Pineapple Apple", likes: 10, author: "" }]
    };
  }

  handleAddIdea = idea =>
    this.setState(({ ideas }) => ({ ideas: ideas.concat([idea]) }));

  handleVote = id => sign => () =>
    this.setState(({ ideas }) => ({
      ideas: ideas.map(
        idea =>
          idea.id === id
            ? {
                ...idea,
                likes: sign === "+" ? idea.likes + 1 : idea.likes - 1
              }
            : idea
      )
    }));

  getProps() {
    return {
      ideas: this.state.ideas,
      handleAddIdea: this.handleAddIdea,
      handleVote: this.handleVote
    };
  }

  render() {
    return this.props.children(this.getProps());
  }
}
