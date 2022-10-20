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
      className="absolute top-[34px] left-[0.31px] tracking-[-0.01em] leading-[100%] font-semibold inline-block w-[173.38px] h-[30.3px] cursor-pointer hover:text-indigo"
      onClick={onPpmTextClick}
    >
      {monthlyVal}
    </div>
  );
};

export default MonthlyCon;
