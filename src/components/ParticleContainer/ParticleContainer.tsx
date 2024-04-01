import React, { useState } from "react";
import "./ParticleContainer.css";
import useParticles from "../useParticles";
import Particle from "../Particle/Particle";

interface ParticleContainerProps {
  style: object;
  particleDetails: AddParticleProps[];
}

export interface AddParticleProps {
  ParticleObj: React.ComponentType<any>;
  animationDuration: number;
}

function ParticleContainer({ style, particleDetails =[] }: ParticleContainerProps) {
  return (
    <>
      <div className="particlesContainer" style={style}>
        {particleDetails?.map((props, index) => {
          return (
            <Particle
              key={index}
              id={index}
              {...props}
            />
          );
        })}
      </div>
    </>
  );
}

export default ParticleContainer;
