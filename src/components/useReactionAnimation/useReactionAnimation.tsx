import React,{ useState } from "react";
import { AddReactionProps } from "../AnimationContainer/AnimationContainer";



function useReactionAnimation() {
  const [reactionDetails, setReactionDetails] = useState<AddReactionProps[]>(
    []
  );

  const addReaction = ({
    ReactionObj,
    animationDuration,
  }: AddReactionProps) => {
    setReactionDetails([
      ...reactionDetails,
      { ReactionObj, animationDuration },
    ]);
  };

  return { reactionDetails, addReaction };
}

export default useReactionAnimation