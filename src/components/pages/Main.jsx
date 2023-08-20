import React from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import InputComponent from "../comps/Input";
import css from "../../styles/form.css";

const { FormContainer, Button } = css;

const Main = () => {
  return (
    <React.Fragment>
      <Head></Head>
      <FormContainer>
        <InputComponent
          params={{ placeholder: "Введите сумму транзакции", maxLength: "100" }}
        />
        <InputComponent
          params={{ placeholder: "Введите тип транзакции", maxLength: "100" }}
        />
        <InputComponent
          params={{ placeholder: "Введите комментарий", maxLength: "100" }}
        />
        <Button backgroundColor={"rgb(229, 229, 229);"}>
          Сохранить транзакцию
        </Button>
      </FormContainer>
      <Foot></Foot>
    </React.Fragment>
  );
};

export default Main;
