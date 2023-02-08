import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Home from './pages/Home';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </AppProvider>
  );
}

export default App;
