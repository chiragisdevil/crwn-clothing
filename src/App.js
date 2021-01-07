import React, {useEffect} from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";
import Shop from "./pages/shop/Shop.jsx";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import SignInSignUp from "./pages/signin-signup/SignInSignUp";
import {auth, createUserProfileDocument} from "./firebase/firebase.util";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

function App() { 
  const dispatch = useDispatch();
  useEffect( () => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async (curUser) => {
        
          if (curUser){
          const userReference = await createUserProfileDocument(curUser);
          
          userReference.onSnapshot((snapshot) => {
            const snapshotData = snapshot.data();
              
            dispatch(setCurrentUser({
                  id:snapshot.id, 
                  ...snapshotData
                }
            ));
          });
        } else {
          dispatch(setCurrentUser(null));
        }
    });

      return function handleUserEndSession(){
        unsubscribeFromAuth();
      }
      // eslint-disable-next-line
  },[]);
  return (    
    <div>
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/crwn-clothing" component={Homepage} />
        <Route exact={true} path="/crwn-clothing/shops" component={Shop} />
        <Route exact={true} path="/crwn-clothing/signin" component={SignInSignUp} />
        <Route exact={true} path="/crwn-clothing/shops/hats" component={Shop} />
        <Route exact={true} path="/crwn-clothing/shops/jackets" component={Shop} />
        <Route exact={true} path="/crwn-clothing/shops/sneakers" component={Shop} />
        <Route exact={true} path="/crwn-clothing/shops/womens" component={Shop} />
        <Route exact={true} path="/crwn-clothing/shops/mens" component={Shop} />
      </Switch>
    </Router>
    </div>
  );
}



// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })


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