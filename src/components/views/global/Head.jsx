import React from "react";
import css from "../../../styles/styles.css";
import HOCButton from "../../comps/HOCHeaderButton";
import Button from "../../comps/Button";

const HOCButtonComponent = HOCButton(Button);

const { HeaderContainer, HeaderCSS } = css;

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
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Head;
