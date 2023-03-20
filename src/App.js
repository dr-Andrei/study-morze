import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Main from './Main';
import LearnLetters from './LearnLetters';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Самоучитель Азбуки Морзе</h1>
          <p className='App__p'>.--. .-. .. .-- . -</p>
          <ul className='menu'>
            <a className='menu__item' href="/"><li >Учиться на словах</li></a>
            <a className='menu__item' href="/learnletters"><li>Учить буквы</li></a>
          </ul>
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/learnletters" element={<LearnLetters />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
