import React, {useState, useEffect} from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";
import Shop from "./pages/shop/Shop.jsx";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import SignInSignUp from "./pages/signin-signup/SignInSignUp";
import {auth, firestore} from "./firebase/firebase.util";

function App() {

  console.log(firestore.collection('users').doc('158Zvglu9xFNAWe4WOlR').collection('cart').doc('EAlC6xFfNBcMHv1xKX3d'));
  console.log(firestore.doc('/users/158Zvglu9xFNAWe4WOlR/cart/EAlC6xFfNBcMHv1xKX3d'));
  console.log(firestore.collection('/users/158Zvglu9xFNAWe4WOlR/cart'));
  
  const [user,setUser] = useState({});

  useEffect( () => {
      const unsubscribeFromAuth = auth.onAuthStateChanged((curUser) => setUser(curUser));
      
      return function handleUserEndSession(){
        unsubscribeFromAuth();
      }
    });
  return (   
    <div>
    <Router>
      <Header currentUser={user}/>
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shops" component={Shop} />
        <Route exact={true} path="/signin" component={SignInSignUp} />
        <Route exact={true} path="/shops/hats" component={Shop} />
        <Route exact={true} path="/shops/jackets" component={Shop} />
        <Route exact={true} path="/shops/sneakers" component={Shop} />
        <Route exact={true} path="/shops/womens" component={Shop} />
        <Route exact={true} path="/shops/mens" component={Shop} />
      </Switch>
    </Router>
    </div>
  );
}
export default App;
  // function Topic(props){
  //   console.log(props);
  //   return(
  //     <div>
  //       <Link to="/hats">Hats</Link>
  //       <h1>Topic List Page</h1>
  //       <button onClick={() => props.history.push("/hats")}>Submit</button>
  //       <Link to={`${props.match.url}13`}>Link 13</Link> 
  //       <Link to={`${props.match.url}17`}>Link 17</Link>
  //       <Link to={`${props.match.url}19`}>Link 19</Link>
  //     </div>
  //   )
  // }
  // function TopicPage(props){
  //   const topicid = props.match.params.topicid;
  //   return(
  //     <h1>Topic detailed Page {topicid}</h1>
  //   )
  // }