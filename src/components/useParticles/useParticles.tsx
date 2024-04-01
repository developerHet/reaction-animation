import React,{ useState } from "react";
import { AddParticleProps } from "../ParticleContainer/ParticleContainer";
import Particle from "../Particle";


function useParticles() {
  const [particleDetails, setParticleDetails] = useState<AddParticleProps[]>(
    []
  );

  const addParticles = ({
    ParticleObj,
    animationDuration,
  }: AddParticleProps) => {
    setParticleDetails([
      ...particleDetails,
      { ParticleObj, animationDuration },
    ]);
  };

  return { particleDetails, addParticles };
}

export default useParticles