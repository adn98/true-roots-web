import { useState } from "react";
import { cn } from "@/utils/cn";

export interface ImageGalleryProps {
  images: string[];
  alt: string;
}

/**
 * Main image with a thumbnail strip beneath it. Used on the product
 * detail page. Falls back gracefully if only one image is provided.
 */
export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-square w-full overflow-hidden rounded-card bg-sand">
        <img
          src={active}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3" role="tablist" aria-label={`${alt} thumbnails`}>
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show image ${index + 1} of ${images.length}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-colors",
                index === activeIndex
                  ? "border-terracotta"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <img src={image} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
