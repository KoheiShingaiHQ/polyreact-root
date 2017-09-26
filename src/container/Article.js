import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {params : props.match.params.id || ""};
  }
  render() {
    return (
      <koheishingai-article-main params={this.state.params.split("-").join(" ")}></koheishingai-article-main>
    );
  }
}

export default Article;
