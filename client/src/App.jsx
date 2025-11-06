import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout.jsx";


// Public Pages
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Pricing from "./pages/Pricing.jsx";
import Photos from "./pages/Photos.jsx";
import Events from "./pages/Events.jsx";

// Admin Pages
import Login from "./pages/auth/Login.jsx";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "games", Component: Games },
      { path: "pricing", Component: Pricing },
      { path: "photos", Component: Photos },
      { path: "events", Component: Events },
      { path: "login", Component: Login },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
