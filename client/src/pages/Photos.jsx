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
              <div>
                <img
                  src={p.url}
                  alt={p.alt || ""}
                  className="outline-2 outline-yellow-400 w-full aspect-video object-cover rounded transition hover:scale-105 hover:shadow-sm"
                />
                <span className="absolute bottom-3 right-4 text-xs bg-white/50 px-1 rounded">
                  View
                </span>
              </div>
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
