import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SEO } from './components/SEO';


function App() {
  return (
    <React.Fragment>
      <SEO
      title = 'Learning React Helmet'
      description='Beginner friendly page for learning React Helemt'
      name='Impulsora Valshoy'
      type='article'/>
      <div className="App">        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Learn more about React Helmet <a href="https://www.freecodecamp.org/news/react-helmet-examples/">Here</a>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
