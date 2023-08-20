import React from "react";
import css from "../../../styles/styles.css";

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
          <button style={buttonCSS}>Главная</button>
          <button style={buttonCSS}>Статистика</button>
          <button style={buttonCSS}>Планирование</button>
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Head;
