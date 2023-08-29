import React, { useState } from "react";
import InputComponent from "../comps/Input";
import css from "../../styles/form.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const { FormContainer, Button } = css;

const Main = (props) => {
  const { action } = props;

  // state of input in the form
  const [value, setValue] = useState("");
  const [type, setType] = useState("доход");
  const [comment, setComment] = useState("");

  // the correctness of the entered data
  const validation = () => {
    if (value !== "" && type !== "" && comment !== "") {
      // add dataLine in list
      const dataLine = `${value}::${type}::${comment}`;
      action((prev) => [...prev, dataLine]);

      // refresh input value
      setValue("");
      setType("доход");
      setComment("");
    }
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  return (
    <React.Fragment>
      <FormContainer style={{ alignItems: "flex-start" }}>
        <InputComponent
          inputValue={value}
          action={setValue}
          placeholder={"Введите сумму транзакции"}
        />
        <FormControl style={{ marginTop: "9px", marginBottom: "12px" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Выберите тип транзакции
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={type}
            onChange={handleChange}
            style={{ marginTop: "5px", marginLeft: "6px" }}
          >
            <FormControlLabel
              value="расход"
              control={<Radio />}
              label="расход"
            />
            <FormControlLabel value="доход" control={<Radio />} label="доход" />
          </RadioGroup>
        </FormControl>

        {type === "доход" && (
          <InputComponent
            inputValue={comment}
            action={setComment}
            placeholder={"Введите комментарий"}
          />
        )}
        {type === "расход" && (
          <FormControl style={{ marginTop: "9px", marginBottom: "12px" }}>
            <FormLabel id="demo-radio-buttons-group-label">
              Выберите тип расходов
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={comment}
              onChange={handleChangeComment}
              style={{ marginTop: "5px", marginLeft: "6px" }}
            >
              <FormControlLabel
                value="покупка продуктов"
                control={<Radio />}
                label="покупка продуктов"
              />
              <FormControlLabel
                value="оплата счетов"
                control={<Radio />}
                label="оплата счетов"
              />
              <FormControlLabel
                value="покупка одежды"
                control={<Radio />}
                label="покупка одежды"
              />
              <FormControlLabel
                value="расходы на транспорт"
                control={<Radio />}
                label="расходы на транспорт"
              />
              <FormControlLabel
                value="развлечения"
                control={<Radio />}
                label="развлечения"
              />
              <FormControlLabel
                value="путешествия"
                control={<Radio />}
                label="путешествия"
              />
            </RadioGroup>
          </FormControl>
        )}
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
    </React.Fragment>
  );
};

export default Main;
