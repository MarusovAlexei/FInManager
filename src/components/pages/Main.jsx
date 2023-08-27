import React, { useState } from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import InputComponent from "../comps/Input";
import DataList from "../views/local/DatdList";
import css from "../../styles/form.css";

const { FormContainer, Button } = css;

const Main = () => {
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");

  const validation = () => {
    if (value !== "" && type !== "" && comment !== "") {
      alert("valid true");

      setValue("");
      setType("");
      setComment("");
    } else {
      alert("error");
    }
  };

  return (
    <React.Fragment>
      <Head></Head>
      <FormContainer>
        <InputComponent
          inputValue={value}
          action={setValue}
          placeholder={"Введите сумму транзакции"}
        />
        <InputComponent
          inputValue={type}
          action={setType}
          placeholder={"Введите тип транзакции"}
        />
        <InputComponent
          inputValue={comment}
          action={setComment}
          placeholder={"Введите комментарий"}
        />
        <Button
          backgroundColor={
            value === ""
              ? "rgb(229, 229, 229)"
              : type === ""
              ? "rgb(229, 229, 229)"
              : comment === ""
              ? "rgb(229, 229, 229)"
              : "rgb(176, 243, 71)"
          }
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>
      <DataList></DataList>
      <Foot></Foot>
    </React.Fragment>
  );
};

export default Main;
