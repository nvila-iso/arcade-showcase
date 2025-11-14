import { Link } from "react-router";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photoGallery from "../data/photoGallery";
import Navbar from "../components/Client/NavBar";

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
      <div className="h-screen w-full flex flex-col items-center px-5 py-10 gap-5 overflow-hidden">
        <div className="w-full bg-black/10 border-2 rounded-lg max-w-4xl pt-5 px-3 pb-5 flex flex-col flex-1 min-h-0 overflow-hidden">
          <Navbar />
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full max-w-5xl">
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
