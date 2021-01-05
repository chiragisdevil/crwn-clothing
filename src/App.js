import React, {useState, useEffect} from 'react';
import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";
import Shop from "./pages/shop/Shop.jsx";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import SignInSignUp from "./pages/signin-signup/SignInSignUp";
import {auth, createUserProfileDocument} from "./firebase/firebase.util";

function App() { 
  const [user,setUser] = useState({});

  useEffect( () => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async (curUser) => {
          if (curUser){
          const userReference = await createUserProfileDocument(curUser);
          console.log("inside"+userReference.displayName);
          userReference.onSnapshot((snapshot) => {
            const snapshotData = snapshot.data();
            
            setUser({
              currentUser:{
                id:snapshot.id, 
                ...snapshotData
              }
            })
          });
        } else {
          setUser(curUser);
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