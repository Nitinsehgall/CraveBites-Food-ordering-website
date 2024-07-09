"use client";

import { Carousel } from "flowbite-react";

export function Crousal() {
  return (
    <>
      <div className="h-56 lg:h-screen sm:h-screen md:h-screen xl:h-100 2xl:h-screen rounded-none">
        <Carousel className="rounded-none carousel" slideInterval={1000}>
          
          <img
            src="https://www.seriouseats.com/thmb/_c-xbP-tch4dpSTxKE1zY16sHo8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20231204-SEA-VeganBurger-FredHardy-00-dbf603c78b694bfd99489b85ab44f4c4.jpg"
            alt="..."
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg"
            alt="..."
          />
          <img
            src="https://recipesblob.oetker.in/assets/e5e3dc94d77242379b32f8576eb64634/1272x764/bombay-sandwich.jpg"
            alt="..."
          />
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/marry-me-pasta-index-65b7c910a7bbf.jpg"
            alt="..."
          />
          <img
            src="https://www.chefkunalkapur.com/wp-content/uploads/2022/02/Hot-Dog-scaled.jpg?v=1645164288"
            alt="..."
          />
        </Carousel>
      </div>
    </>
  );
}
