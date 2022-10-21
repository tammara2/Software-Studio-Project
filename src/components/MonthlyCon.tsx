import { FunctionComponent, useCallback } from "react";

type MonthlyConType = {
  monthlyVal?: string;
};

const MonthlyCon: FunctionComponent<MonthlyConType> = ({ monthlyVal }) => {
  const onPpmTextClick = useCallback(() => {
    window.open("https://gml.noaa.gov/ccgg/trends/data.html");
  }, []);

  return (
    <div
      className="absolute top-[34px] left-[calc(50%_-_366.34px)] tracking-[-0.01em] leading-[100%] font-semibold inline-block w-[173.38px] h-[30.3px] cursor-pointer hover:text-indigo hover:cursor-grab"
      onClick={onPpmTextClick}
    >
      {monthlyVal}
    </div>
  );
};

export default MonthlyCon;
