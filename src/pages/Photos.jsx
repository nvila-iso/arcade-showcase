import { Link } from "react-router";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photoGallery from "../data/photoGallery";

const Photos = () => {
  const [index, setIndex] = useState(-1);
  const slides = photoGallery.map((p) => ({
    src: p.url,
    alt: p.alt || "",
    width: p.width,
    height: p.height,
  }));
  return (
    <>
      <div className="h-screen w-full flex flex-col items-center px-5 py-10 overflow-hidden">
        <div className="bg-black/20 border-2 border-black rounded-t-lg w-full max-w-4xl flex justify-center items-center gap-5 flex-shrink-0">
          <Link to="/home">
            <p className="text-white font-bold md:text-2xl hover:text-[#E4494F] transition">
              HOME
            </p>
          </Link>
          <p className="relative bottom-5 text-2xl md:text-5xl text-[#E4494F] font-bold text-shadow-[2px_2px_0px_rgb(4_45_77_/_1)] md:text-shadow-[3px_3px_0px_rgb(4_45_77_/_1)] bg-yellow-400 rounded-2xl border-2 border-black/80 py-2 px-3 shadow-[0_5px_0px_rgba(0,0,0,.5)]">
            PHOTOS
          </p>
          <Link to="/pricing">
            <p className="text-white font-bold md:text-2xl hover:text-[#E4494F] transition">
              PRICING
            </p>
          </Link>
        </div>

        <div className="w-full bg-[#FDB827] border-l-2 border-r-2 border-b-2 rounded-b-lg max-w-4xl pt-5 px-3 flex flex-col flex-1 min-h-0 texture">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full max-w-5xl">
            {photoGallery.map((p, i) => (
              <button
                key={p.url ?? i}
                onClick={() => setIndex(i)}
                className="group relative"
                aria-label={`Open ${p.alt || "image"}`}
              >
                <img
                  src={p.url}
                  alt={p.alt || ""}
                  className="w-full aspect-video object-cover border-5 border-blue-800 rounded-sm transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute bottom-1 right-1 text-[10px] bg-black/70 px-1 rounded">
                  View
                </span>
              </button>
            ))}
          </div>
        </div>
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </>
  );
};

export default Photos;
