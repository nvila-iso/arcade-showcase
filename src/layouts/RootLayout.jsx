import { Outlet } from "react-router";

const RootLayout = () => {
  return (

  
    <div className="min-h-screen bg-cover bg-center flex flex-col">
      <main className="mx-auto max-w-5xl w-full h-full flex-1 flex min-h-0">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

