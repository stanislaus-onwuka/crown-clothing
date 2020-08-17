import React from 'react';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop';
import { Switch,Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up"; 
import { auth, createUserProfileDocument } from './firebase/firebase';
import './App.css';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
         
        const userRef = await createUserProfileDocument(userAuth);


        userRef.onSnapshot( snapshot =>{
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
        
      }else{
        this.setState({ currentUser: userAuth }); 
      }

    } )
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
