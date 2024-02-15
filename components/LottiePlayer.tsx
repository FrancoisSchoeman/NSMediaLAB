"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import cube from "../public/rubiks-cube.json";

export function LottiePlayer({
  src,
  height,
  width,
  speed,
}: {
  src: object;
  height: string;
  width: string;
  speed: number;
}) {
  return (
    <Player
      autoplay
      loop
      speed={speed}
      src={src}
      style={{ height: height, width: width }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
}
