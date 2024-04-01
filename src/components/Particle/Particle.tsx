import React, { useState, useEffect } from "react";
import "./Particle.css";
import { AddParticleProps } from "../ParticleContainer/ParticleContainer";

interface ParticleProps extends AddParticleProps {
  id: number;
}

function Particle({ id, ParticleObj, animationDuration }: ParticleProps) {
  const [position, setPosition] = useState(() => {
    const isLeft = Math.random() < 0.5;
    const dynamicPosition = isLeft
      ? { left: `${Math.random() * 80}%` }
      : { right: `${Math.random() * 80}%` };

    return {
      // dynamic style
      ...dynamicPosition,
      opacity: 1,
      transitionDuration: `${Math.random() * 2 + animationDuration}s`,
    };
  });

  useEffect(() => {
    const topValue = `${Math.random() * 10}%`;
    const interval = setInterval(() => {
      setPosition((prevPosition) => ({
        ...prevPosition,
        top: topValue,
        opacity: 0,
      }));
    }, 50);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const particleElement = document.getElementById(`particle-${id}`);
        if (particleElement) {
          particleElement.remove();
        }
      },
      (animationDuration + 1) * 1000
    );

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div style={position} className="particle" id={`particle-${id}`}>
      <ParticleObj />
    </div>
  );
}

export default Particle;
