/*
Raw data sources page, accessed by clicking the "raw data" button.
Also contains links to social media.
Styled in FrameComponent.modules.css.
*/

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Submission.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div className={styles.frameDiv}>
      <b className={styles.rawDataCarbonConcentratio}>
        THIS WILL BECOME THE SUBMISSION FORM
      </b>
      
      <div className={styles.backDiv} onClick={onBackTextClick}>
        Back
      </div>
      <form>
        <label>
            Waste
            <input type="text" name="waste" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
      
  );
};

export default FrameComponent;
