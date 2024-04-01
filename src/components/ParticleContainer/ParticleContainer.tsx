import React, { useState } from "react";
import "./ParticleContainer.css";
import Particle from "../Particle/Particle";

interface ParticleContainerProps {
  style: object
  particleDetails: AddParticleProps[]; 
}

export interface AddParticleProps {
  ParticleObj: React.ComponentType<any>;
  animationDuration: number;
}

function ParticleContainer({
  style,
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
      <div className="particlesContainer" style={style}>
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
