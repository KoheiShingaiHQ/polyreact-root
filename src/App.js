import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Featured from './container/Featured.js'
import Article from './container/Article.js'
import About from './container/About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <koheishingai-header title="koheishingai"></koheishingai-header>
        <Route exact path="/" component={Featured} />
        <Route exact path="/article" component={Article} /> 
        <Route exact path="/article/:id" component={Article} />
        <Route exact path="/about" component={About} />
        <koheishingai-footer></koheishingai-footer>
      </div>
    );
  }
}

export default App;