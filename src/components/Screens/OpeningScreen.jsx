import { Link } from "react-router";

import ScreenLayout from "../../layouts/ScreenLayout";

const OpeningScreen = () => {
  return (
    <>
      <ScreenLayout>
        <div className="flex justify-center items-center mx-auto h-full text-white text-center px-10 flex flex-col gap-2 rounded-lg">
          <p>
            Welcome to a new kind of arcade experience — a realm built for those
            who still feel the electricity of pixel power and CRT glow in their
            veins. This is a sanctuary for players who believe skill matters,
            competition is real, and nothing beats the raw energy of arcade
            controls under your hands.
          </p>
          <p>
            Step past the ordinary and into a curated world of rare imports,
            cult classics, and legendary machines sourced from around the globe.
            From precision fighters to screaming shmups, rhythm beasts to retro
            heroes — every game here has a story worth discovering.
          </p>
          <p>
            With our flat-rate play model, you’re free to explore, compete, and
            sharpen your craft — no quarters, no time limits, no nonsense.
          </p>
          <p> This isn’t a tourist barcade full of distractions.</p>
          <p> This isn’t a place for button mashers and casual dabblers.</p>
          <p>
            This is a home for seekers — players chasing challenge, mastery, and
            pure arcade soul.
          </p>
          <Link to="main-screen" className="font-semibold text-2xl">
            Click to continue...
          </Link>
        </div>
      </ScreenLayout>
    </>
  );
};

export default OpeningScreen;
