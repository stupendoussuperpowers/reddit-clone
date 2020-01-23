import React,{} from "react";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList"
import SubReddit from "./components/SubReddit"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from "./components/Post";
import PostCard from "./components/SubReddit/PostCard"
import SubInfo from "./components/SubReddit/SubInfo"
import Card from "./components/Card";
import "./styles/styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>

        <Switch>
          <Route exact path="/" >
            <SubReddit/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
