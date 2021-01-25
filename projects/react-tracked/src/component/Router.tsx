import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Counter from 'src/component/Counter'
import Person from 'src/component/Person'
import PersonRedux from 'src/component/PersonRedux'
import Todo from './Todo'
import Mobx6 from './Mobx6'

export default function RouterComp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo</Link>
            </li>
            <li>
              <Link to="/Counter">Counter</Link>
            </li>
            <li>
              <Link to="/Person">Person</Link>
            </li>
            <li>
              <Link to="/PersonRedux">PersonRedux</Link>
            </li>
            <li>
              <Link to="/Mobx6">Mobx6</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Mobx6">
            <Mobx6 />
          </Route>
          <Route path="/Counter">
            <Counter />
          </Route>
          <Route path="/Person">
            <Person />
          </Route>
          <Route path="/PersonRedux">
            <PersonRedux />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
