import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ScreenLayout from "../../layouts/ScreenLayout";
import photoGallery from "../../data/photoGallery"; 

const Photos = () => {
  const [index, setIndex] = useState(-1);


  const slides = photoGallery.map((p) => ({
    src: p.url, 
    alt: p.alt || "",
    width: p.width, 
    height: p.height, 
    // srcSet: p.srcSet,       // optional: [{ src, width, height }, ...]
  }));

  return (
    <ScreenLayout>
      <div className="flex flex-col items-center gap-4 p-10 text-white mx-auto w-full">
        <p className="text-2xl text-teal-400 font-semibold underline">
          Arcade Photos
        </p>

    
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
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
                className="w-full aspect-video object-cover border-2 border-white rounded-sm transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute bottom-1 right-1 text-[10px] bg-black/70 px-1 rounded">
                View
              </span>
            </button>
          ))}
        </div>


        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </div>
    </ScreenLayout>
  );
};

export default Photos;
