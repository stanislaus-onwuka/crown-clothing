import React from 'react';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop';
import { Switch,Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"; 
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
