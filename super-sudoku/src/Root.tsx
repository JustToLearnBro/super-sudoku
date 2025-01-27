import * as React from "react";

import {Outlet, ReactLocation, Router} from "@tanstack/react-location";

import {Provider} from "react-redux";

import Header from "./components/modules/Header";
import store from "./state/store";
import Game from "./components/pages/Game";
import Playground from "./components/pages/Playground";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/playground",
    element: <Playground />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "404",
    template: <NotFound />,
  },
];

const location = new ReactLocation();

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <h1>hello world</h1>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router location={location} routes={routes}>
          <div>
            <Outlet />
          </div>
        </Router>
      </React.Suspense>
    </Provider>
  );
};

export default App;
