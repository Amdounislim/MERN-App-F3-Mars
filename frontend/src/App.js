import React, { useEffect } from 'react';
import './App.css';
import { Button } from "react-bootstrap"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import UserCard from "./components/UserCard"
import AddUser from "./components/AddUser"
import { getUsers } from "./JS/actions/actionUser"

function App() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <BrowserRouter>
      <div>
        <Link to="/Users-list">
          <Button variant="outline-primary button">Users List</Button>
        </Link>
        <Link to="/Add-user">
          <Button variant="primary button">Add User</Button>
        </Link>
      </div>
      <Switch>
        <Route path="/Users-list" render={() => <div className="contact-list">
          {users.map((el, i) => (<UserCard user={el} key={i} />))}
        </div>} />
        <Route path="/Add-user" render={() => <AddUser />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
