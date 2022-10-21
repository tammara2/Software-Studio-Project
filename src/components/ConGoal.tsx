import { FunctionComponent, useCallback } from "react";

type ConGoalType = {
  goalVal?: string;
};

const ConGoal: FunctionComponent<ConGoalType> = ({ goalVal }) => {
  const onPpmText2Click = useCallback(() => {
    window.open(
      "https://mn350.org/understanding350/#:~:text=The%20origins%20of%20350%20and%20the%20history%20of%20atmospheric%20CO&text=Countless%20scientists%2C%20climate%20experts%2C%20and,275%20ppm%20of%20carbon%20dioxide."
    );
  }, []);

  return (
    <div
      className="absolute top-[32px] left-[calc(50%_-_-351.5px)] tracking-[-0.01em] leading-[100%] font-semibold inline-block w-[165px] h-[30px] cursor-pointer hover:text-indigo"
      onClick={onPpmText2Click}
    >
      {goalVal}
    </div>
  );
};

export default ConGoal;
