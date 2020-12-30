import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";
import Shop from "./pages/shop/Shop.jsx";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from "./components/header/Header.jsx";

function App() {
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
  return (   
    <div>
   
    <Router>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shops" component={Shop} />
        <Route exact={true} path="/shops/hats" component={Shop} />
        <Route exact={true} path="/shops/jackets" component={Shop} />
        <Route exact={true} path="/shops/sneakers" component={Shop} />
        <Route exact={true} path="/shops/womens" component={Shop} />
        <Route exact={true} path="/shops/mens" component={Shop} />
        {/* <Route exact={true} path="/topic" component={Topic} />
        <Route exact={true} path="/topic/:topicid" component={TopicPage} /> */}
      </Switch>
    </Router>
    </div>

  );
}

export default App;
