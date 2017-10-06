import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
const { detect } = require('detect-browser');
const browser = detect();

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {params : props.match.params.id || ""};
  }
  render() {
    return (
      <div>
        { browser.name == "chrome" ?
          <koheishingai-article-main params={this.state.params.split("-").join(" ")}></koheishingai-article-main>
          : <h1>not chrome</h1> }
      </div>
    );
  }
}

export default Article;
