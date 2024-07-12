"use client";

import { Carousel } from "flowbite-react";

export function Crousal() {
  return (
    <>
      <div
        className="h-56  sm:h-screen md:h-screen xl:h-100 2xl:h-screen rounded-none bg-black"
      >
        <Carousel
          className="rounded-none carousel rounded-none"
          slideInterval={1000}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/564/798/non_2x/burger-with-oil-splash-and-flying-ingredients-on-a-dark-background-generative-ai-free-photo.jpg"
            alt="..."
            className="no-rounded"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
            alt="..."
            className="rounded"
          />
          <img
            src="https://wallpapers.com/images/hd/sandwich-1332-x-850-background-4t7mg4kene7dpx81.jpg"
            alt="..."
            className="no-rounded"
          />
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/marry-me-pasta-index-65b7c910a7bbf.jpg"
            alt="..."
            className="no-rounded"
          />
          <img
            src="https://www.chefkunalkapur.com/wp-content/uploads/2022/02/Hot-Dog-scaled.jpg?v=1645164288"
            alt="..."
            className="no-rounded"
          />
        </Carousel>
      </div>
    </>
  );
}
