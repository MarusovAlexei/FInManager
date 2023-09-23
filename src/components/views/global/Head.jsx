import React from "react";
import { Link } from "react-router-dom";
import css from "../../../styles/styles.css";

import HOCButton from "../../comps/HOCHeaderButton";
import Button from "../../comps/Button";

const HOCButtonComponent = HOCButton(Button);

const { HeaderContainer, HeaderCSS } = css;

const buttonCSS = {
  display: `block`,
  padding: `10px 14px 12px`,
  borderRadius: `6px`,
  backgroundColor: `#b0f347`,
  cursor: `pointer`,
  marginLeft: `10px`,
};

const Head = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <HeaderCSS.Logo>FinManager</HeaderCSS.Logo>
        <HeaderCSS.MenuContainer>
          <HOCButtonComponent
            text={"/main"}
            onClick={() => {}}
            inner={"Главная"}
          />
          <HOCButtonComponent
            text={"/stat/расход"}
            onClick={() => {}}
            inner={"Статистика"}
          />
          <HOCButtonComponent
            text={"/plan"}
            onClick={() => {}}
            inner={"Планирование"}
          />
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Head;
