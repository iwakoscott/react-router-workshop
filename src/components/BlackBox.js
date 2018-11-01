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

export default class BlackBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
  }

  getIdea = id => this.state.ideas.find(idea => idea.id === id);

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
      handleVote: this.handleVote,
      getIdea: this.getIdea
    };
  }

  render() {
    return this.props.children(this.getProps());
  }
}
