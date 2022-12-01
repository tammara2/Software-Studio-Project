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

  const onImage21Click = useCallback(() => {
    window.open("https://github.com/NavSous/Software-Studio-Project");
  }, []);

  const onImage31Click = useCallback(() => {
    window.open(
      "https://www.nuevaschool.org/about/notably-nueva/environmental-citizenship"
    );
  }, []);

  const onImage41Click = useCallback(() => {
    window.open("https://twitter.com/claymalott");
  }, []);

  return (
    <div className={styles.frameDiv}>
      <b className={styles.rawDataCarbonConcentratio}>
        THIS WILL BECOME THE SUBMISSION FORM
      </b>
      
      <div className={styles.backDiv} onClick={onBackTextClick}>
        Back
      </div>
      <textarea></textarea>
      </div>
      
  );
};

export default FrameComponent;
