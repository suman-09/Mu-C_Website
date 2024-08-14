import App from "../App";
import About from "../Pages/About";
import Events from "../Pages/Events";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <App />,
  },
  {
    path: "/events",
    name: "Events",
    element: <Events />,
  },
  {
    path: "/members",
    name: "Members",
    element: <App />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
];
