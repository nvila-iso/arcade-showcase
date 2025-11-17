import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";

// Public Pages
import Home from "./pages/Home.jsx";
import Games from "./pages/Games.jsx";
import Info from "./pages/Info.jsx";
import Photos from "./pages/Photos.jsx";
import Events from "./pages/Events.jsx";
import PageTemplate from "./pages/PageTemplate.jsx";

// Admin Pages
import Login from "./pages/auth/Login.jsx";
import AdminPanel from "./pages/admin/AdminPanel.jsx";

const routes = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "games", Component: Games },
      { path: "info", Component: Info },
      { path: "photos", Component: Photos },
      { path: "events", Component: Events },
      { path: "template", Component: PageTemplate },
    ],
  },

  {
    path: "/login",
    Component: AdminLayout,
    children: [
      { index: true, Component: Login },
      { path: "admin-panel", Component: AdminPanel },
    ],
  },
];

const App = createBrowserRouter(routes);
export default App;
