import React, { useState } from "react";
import "./ParticleContainer.css";
import Particle from "../Particle/Particle";

interface ParticleContainerProps {
  height?: string;
  width?: string;
  position?: "relative" | "absolute";
  particleDetails: AddParticleProps[]; 
}

export interface AddParticleProps {
  ParticleObj: React.ComponentType<any>;
  animationDuration: number;
}

function ParticleContainer({
  height = "40px",
  width = "40px",
  position,
  particleDetails,
}: ParticleContainerProps) {
  // const [particleDetails, setParticleDetails] = useState<AddParticleProps[]>(
  //   []
  // );

  // const addParticles = (particleProps: AddParticleProps) => {
  //   setParticleDetails([...particleDetails, particleProps]);
  // };

  return (
    <>
      <div className="particlesContainer" style={{ height, width, position }}>
        {particleDetails?.map((props, index) => (
          <Particle key={index} id={index} {...props} />
        ))}
      </div>
      {/* <button
        onClick={() => addParticles({ ParticleSample, animationDuration: 5 })}
      >
        Add Particles
      </button> */}
    </>
  );
}

export default ParticleContainer;
