import React from 'react';
import { formatIdea } from '../utils';
/*
  Idea Schema:
  {
    id,
    author: "",
    title: "",
    likes: ""
  }
*/

export default class API extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
  }
  getIdeas = () => this.state.ideas;
  getIdea = id => this.state.ideas.find(idea => idea.id === id);
  handleAddIdea = (title, author = '') => {
    const idea = formatIdea(title, author);
    this.setState(({ ideas }) => ({ ideas: ideas.concat([idea]) }));
    return idea;
  };

  handleVote = id => sign => () =>
    this.setState(({ ideas }) => ({
      ideas: ideas.map(
        idea =>
          idea.id === id
            ? {
                ...idea,
                likes: sign === '+' ? idea.likes + 1 : idea.likes - 1
              }
            : idea
      )
    }));

  getProps() {
    return {
      getIdeas: this.getIdeas,
      handleAddIdea: this.handleAddIdea,
      handleVote: this.handleVote,
      getIdea: this.getIdea
    };
  }

  render() {
    return this.props.children(this.getProps());
  }
}
