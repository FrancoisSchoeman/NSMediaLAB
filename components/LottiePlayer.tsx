"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";

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
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <Player
      autoplay
      loop
      speed={speed}
      src={src}
      style={{
        height: windowWidth > 768 ? height : "250px",
        width: windowWidth > 768 ? width : "250px",
      }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
}
