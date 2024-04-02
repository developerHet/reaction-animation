import React, { useState, useEffect } from "react";
import "./ReactionWrapper.css";
import { AddReactionProps } from "../AnimationContainer/AnimationContainer";


interface ReactionWrapperProps extends AddReactionProps {
  id: number;
}

function ReactionWrapper({ id, ReactionObj, animationDuration }: ReactionWrapperProps) {
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
        const reactionElement = document.getElementById(`reaction-${id}`);
        if (reactionElement) {
          reactionElement.remove();
        }
      },
      (animationDuration + 1) * 1000
    );

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div style={position} className="reactionWrapper" id={`reaction-${id}`}>
      <ReactionObj />
    </div>
  );
}

export default ReactionWrapper;
