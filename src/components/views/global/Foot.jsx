import React from "react";
import css from "../../../styles/styles.css";

const { FooterContainer } = css;

const Foot = () => {
  return (
    <React.Fragment>
      <FooterContainer
        style={{ justifyContent: "space-around", fontSize: "14px" }}
      ></FooterContainer>
    </React.Fragment>
  );
};

export default Foot;
