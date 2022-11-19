/*
2021 CO2 concentration, part of upper panel of dashboard.
Currently displays a static number, should update to actually fetch the live data.
Styled in AmericaCon.modules.css.
*/

import { useCallback } from "react";
import styles from "./AmericaCon.module.css";

const AmericaCon = ({ americaVal }) => {
  const onPpmText1Click = useCallback(() => {
    window.open("https://gml.noaa.gov/ccgg/trends/data.html");
  }, []);

  return (
    <div className={styles.ppmDiv} onClick={onPpmText1Click}>
      {americaVal}
    </div>
  );
};

export default AmericaCon;
