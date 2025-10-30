import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout.jsx";
import ArcadeHome from "./pages/ArcadeHome.jsx";

import MainScreen from "./components/Screens/MainScreen.jsx";
import Pinball from "./components/Screens/Pinball.jsx";
import Arcade from "./components/Screens/Arcade.jsx";
import Pricing from "./components/Screens/Pricing.jsx";
import Photos from "./components/Screens/Photos.jsx";
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "main-screen", Component: MainScreen },
      { path: "pinball", Component: Pinball },
      { path: "arcade", Component: Arcade },
      { path: "pricing", Component: Pricing },
      { path: "photos", Component: Photos },
      { path: "home", Component: ArcadeHome },
      {path: "games", Component: Games}
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
