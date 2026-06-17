import { ParticlesProvider } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

// Stable initialization callback defined outside the component lifecycle
const initParticles = async (engine) => {
  await loadFull(engine);
};

export default function ParticleBackground() {
  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="tsparticles"
        className="absolute inset-0 pointer-events-none z-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#7C3AED", "#06B6D4", "#A78BFA"],
          },
          links: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
    </ParticlesProvider>
  );
}
