
"use client";

import { Rating } from "flowbite-react";

export function Ratings() {
  return (
    <Rating className="">
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={true} />
    </Rating>
  );
}
