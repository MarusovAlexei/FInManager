import React from "react";
import { Link } from "react-router-dom";
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
          <Link
            to={"/main"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button style={buttonCSS}>Главная</button>
          </Link>

          <Link
            to={"/stat/расход"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button style={buttonCSS}>Статистика</button>
          </Link>

          <Link
            to={"/plan"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button style={buttonCSS}>Планирование</button>
          </Link>
        </HeaderCSS.MenuContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Head;
