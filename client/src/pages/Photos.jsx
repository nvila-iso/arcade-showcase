import PageTemplate from "./PageTemplate";
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
      <PageTemplate>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 w-full">
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
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </PageTemplate>
    </>
  );
};

export default Photos;
