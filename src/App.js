import './App.css';
import Homepage from "./pages/homepage/Homepage.jsx";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

function App() {
  function Hats(props){
    return(
      <h1>HATS PAGE</h1>
    )
  }
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
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shop/hats" component={Hats} />
        <Route exact={true} path="/shop/jackets" component={Hats} />
        <Route exact={true} path="/shop/sneakers" component={Hats} />
        <Route exact={true} path="/shop/womens" component={Hats} />
        <Route exact={true} path="/shop/mens" component={Hats} />
        {/* <Route exact={true} path="/topic" component={Topic} />
        <Route exact={true} path="/topic/:topicid" component={TopicPage} /> */}
      </Switch>
    </Router>
    </div>

  );
}

export default App;
