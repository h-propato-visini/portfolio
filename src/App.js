import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Portfolio from './portfolio';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/' component={Portfolio}/>
      </Router>
    )
  }
}

export default App
