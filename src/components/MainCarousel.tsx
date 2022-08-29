import React from "react";

type MainCarouselPT = {
  name: string;
};

export default function MainCarousel(props: MainCarouselPT) {
  return <div>{props.name}</div>;
}
