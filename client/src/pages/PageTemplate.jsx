import Navbar from "../components/Client/NavBar";

const PageTemplate = ({ children, className = "" }) => {
  return (
    <div className="w-screen h-screen py-5 flex flex-col gap-5 items-center">

      <h1 className="py-3 w-xs text-3xl flex items-center justify-center rounded-full bg-red-400 text-center text-white shadow-[0px_6px_0px_rgb(251_44_54_/_1)] hover:shadow-[0px_1px_0px_rgb(251_44_54_/_1)] font-black transition">
        ARCADIA MANOR
      </h1>


      <div className="flex-1 w-full min-h-0">
        <fieldset className="h-full border-3 border-yellow-500 rounded bg-black/30 backdrop-blur-xs flex flex-col ">
          <legend className="mx-auto mb-5">
            <Navbar />
          </legend>


          <div className="flex-1 flex flex-col items-center min-h-0 px-5">
            {children}
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default PageTemplate;
