"use client";
import { FC, useCallback } from "react";

import Particles from "react-tsparticles";
import { Container, Engine, type ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesWrapper: FC = ({}) => {
  const particleOptions: ISourceOptions = {
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 1000 },
      },
      color: {
        value: ["#969696"],
      },

      size: {
        value: 0.6,
        random: true,
        anim: {
          enable: true,
          speed: 1.181158184520175,
          size_min: 0.8,
          sync: true,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        out_mode: "out",
      },
    },

    interactivity: {
      detect_on: "window",
      events: {
        onhover: { enable: true, mode: "grab" },
        resize: true,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 0.2 } },
      },
    },
  };
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particleOptions}
    />
  );
};

export default ParticlesWrapper;
