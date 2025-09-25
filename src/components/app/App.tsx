import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import MainPage from '../pages/MainPage';
import FavPage from '../pages/FavPage';
import RecipePage from '../pages/RecipePage';
import Seporator from '../Seporator/Seporator';

import '../../styles/main.scss';

function App() {
  return (
    <Router>
      <Header />
      <main className='main'>
        <Switch>
          <Route
            exact
            path='/'
          >
            <MainPage />
          </Route>

          <Route
            exact
            path='/my-favorites'
          >
            <FavPage />
          </Route>

          <Route
            exact
            path='/recipe'
          >
            <RecipePage />
          </Route>
        </Switch>
        <Seporator />
      </main>
    </Router>
  );
}

export default App;
