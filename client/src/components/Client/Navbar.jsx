import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const isNavActive = (button) => {
    let buttonDown =
      "w-20 sm:w-24 md:w-28 py-1 shadow-[0px_3px_0px_rgb(252_200_0_/_1)] text-red-400 bg-yellow-300";
    let defaultButton =
      "w-20 sm:w-24 md:w-28 bg-yellow-200 text-yellow-900 hover:text-red-400 hover:bg-yellow-300 py-1 font-semibold shadow-[0px_6px_0px_rgb(252_200_0_/_1)] hover:shadow-[0px_3px_0px_rgb(252_200_0_/_1)] transition cursor-pointer";
    if (button === location.pathname) {
      return buttonDown;
    } else {
      return defaultButton;
    }
  };

  return (
    <>
      <div className="flex font-black text-center justify-center items-center shadow-xs">
        <Link to="/">
          <p className={`${isNavActive("/")} rounded-l`}>HOME</p>
        </Link>
        <Link to="/info">
          <p className={`${isNavActive("/info")}`}>INFO</p>
        </Link>
        <Link to="/games">
          <p className={`${isNavActive("/games")} `}>GAMES</p>
        </Link>
        <Link to="/events">
          <p className={`${isNavActive("/events")} `}>EVENTS</p>
        </Link>

        <Link to="/photos">
          <p className={`${isNavActive("/photos")} rounded-r`}>PHOTOS</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
