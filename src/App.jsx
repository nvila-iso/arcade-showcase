import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout.jsx";
import ArcadeHome from "./pages/ArcadeHome.jsx";

import MainScreen from "./components/Screens/MainScreen.jsx";
import Pinball from "./components/Screens/Pinball.jsx";
import Arcade from "./components/Screens/Arcade.jsx";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: ArcadeHome },
      { path: "main-screen", Component: MainScreen },
      { path: "pinball", Component: Pinball },
      { path: "arcade", Component: Arcade },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
