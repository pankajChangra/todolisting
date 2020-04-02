import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from "./components/homepage/Layout"
import Todoo from "./components/homepage/Todo";
import Todo from "./components/TodoList/TodoApp"

class BaseRouter extends React.Component{

    render(){
      return (
          <Router>
              <Switch>
                <Route exact path="/" component={Layout} />
                    <Route exact path="/tod" component={Todoo} />
                    <Route exact path="/todo" component={Todo} />
              </Switch>
          </Router>
        )
    }
}

export default BaseRouter;