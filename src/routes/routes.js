import Login from "../components/pages/Login/";
import Home from "../components/pages/Home/";
import About from "../components/pages/About/";
import NotFound from "../components/pages/NotFound/";

const routes = [
  {
    path: "/",
    exact: true,
    component: Login
  },
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: true,
    component: About
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;
