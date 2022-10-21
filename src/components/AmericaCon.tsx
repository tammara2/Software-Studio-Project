import { FunctionComponent, useCallback } from "react";

type AmericaConType = {
  americaVal?: string;
};

const AmericaCon: FunctionComponent<AmericaConType> = ({ americaVal }) => {
  const onPpmText1Click = useCallback(() => {
    window.open("https://gml.noaa.gov/ccgg/trends/data.html");
  }, []);

  return (
    <div
      className="absolute top-[34px] left-[calc(50%_-_-14.66px)] tracking-[-0.01em] leading-[100%] font-semibold inline-block w-[183px] h-[30px] cursor-pointer hover:text-indigo"
      onClick={onPpmText1Click}
    >
      {americaVal}
    </div>
  );
};

export default AmericaCon;
