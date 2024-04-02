import React, { useState } from "react";
import "./AnimationContainer.css";
import ReactionWrapper from "../ReactionWrapper/ReactionWrapper";

interface AnimationContainerProps {
  style?: object;
  reactionDetails: AddReactionProps[];
}

export interface AddReactionProps {
  ReactionObj: React.ComponentType<any>;
  animationDuration: number;
}

function AnimationContainer({ style, reactionDetails =[] }: AnimationContainerProps) {
  return (
    <>
      <div className="animationContainer" style={style}>
        {reactionDetails?.map((props, index) => {
          return (
            <ReactionWrapper
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

export default AnimationContainer;
