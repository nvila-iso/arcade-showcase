import { Outlet } from "react-router";
import Marquee from "./Marquee";
import JoystickFooter from "./JoystickFooter";

const RootLayout = () => {
  return (
    // RootLayout.jsx (key parts)
  
    <div className="min-h-screen bg-cover bg-center flex flex-col">


      {/* route area must be growable */}
      <main className="mx-auto max-w-5xl w-full h-full flex-1 flex min-h-0">
        <Outlet />
      </main>
{/* 
      <footer>
        <JoystickFooter />
      </footer> */}
    </div>
  );
};

export default RootLayout;

//bg-[url('/arcade-background.jpg')]