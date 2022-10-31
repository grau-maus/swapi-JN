import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { getPerson } from "./store/people";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const loaded = useSelector((state) => state.people.loaded);

  useEffect(() => {
    (async () => {
      if (!loaded) dispatch(getPerson());
    })();
  }, [dispatch, loaded]);

  if (!loaded) return null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
