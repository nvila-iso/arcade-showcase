import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout.jsx";
import ArcadeHome from "./pages/ArcadeHome.jsx";

import MainScreen from "./components/Screens/MainScreen.jsx";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: ArcadeHome },
      { path: "main-screen", Component: MainScreen },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
