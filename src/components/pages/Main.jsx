import React, { useRef, useState } from "react";
import InputComponent from "../comps/Input";
import css from "../../styles/form.css";

import { useSelector, useDispatch } from "react-redux";
import {
  changeViewType,
  changeComment,
  changeValue,
} from "../../redux-state/reducers/view-type-for-main";

import Foot from "./../views/global/Foot";
import FooterContext from "../../redux-state/context/footerContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import useNumberValueFormat from "../../hooks/useNumberValueFormat";

const { FormContainer, Button, Input } = css;

const Main = (props) => {
  const { action } = props;

  const valueInput = useRef();
  const [footerText, setFooterText] = useState("FinManager");
  const [formatValue, formating] = useNumberValueFormat();

  // Redax-toolkit
  const dispatch = useDispatch();
  const viewType = useSelector((state) => state.viewTypeMain.viewType);
  const viewValue = useSelector((state) => state.viewTypeMain.value);
  const viewComment = useSelector((state) => state.viewTypeMain.comment);

  // the correctness of the entered data
  const validation = () => {
    if (formatValue !== "" && viewType !== "" && viewComment !== "") {
      // add dataLine in list
      const dataLine = `${formatValue}::${viewType}::${viewComment}`;

      action(dataLine);

      // refresh input value
      dispatch(changeValue(""));
      dispatch(changeViewType("доход"));
      dispatch(changeComment(""));
    }
  };

  const handleChange = (event) => {
    dispatch(changeViewType(event.target.value));
  };

  const handleChangeValue = (param) => {
    dispatch(changeValue(param));
  };

  const handleChangeComment = (param) => {
    dispatch(changeComment(param));
  };

  const handleChangeCommentRadio = (event) => {
    dispatch(changeComment(event.target.value));
  };

  const setFocus = () => {
    valueInput.current.disabled = false;
    valueInput.current.focus();
  };

  return (
    <React.Fragment>
      <FormContainer style={{ alignItems: "flex-start" }}>
        <Button
          backgroundColor={"rgb(176, 243, 71)"}
          onClick={setFocus}
          style={{ marginBottom: "12px" }}
        >
          Начать заполнение
        </Button>

        <Input
          ref={valueInput}
          value={viewValue}
          type={"text"}
          placeholder={"Введите сумму транзакции"}
          maxLength={"100"}
          disabled
          onChange={(event) => {
            const newValue = event.target.value;
            formating(newValue);
            handleChangeValue(newValue);
          }}
        />

        <FormControl style={{ marginTop: "9px", marginBottom: "12px" }}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Выберите тип транзакции
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={viewType}
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

        {viewType === "доход" && (
          <InputComponent
            inputValue={viewComment}
            action={handleChangeComment}
            placeholder={"Введите комментарий"}
          />
        )}
        {viewType === "расход" && (
          <FormControl style={{ marginTop: "9px", marginBottom: "12px" }}>
            <FormLabel id="demo-radio-buttons-group-label">
              Выберите тип расходов
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={viewComment}
              onChange={handleChangeCommentRadio}
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
            viewValue === ""
              ? "rgb(229, 229, 229)"
              : viewType === ""
              ? "rgb(229, 229, 229)"
              : viewComment === ""
              ? "rgb(229, 229, 229)"
              : "rgb(176, 243, 71)"
          }
          onClick={validation}
        >
          Сохранить транзакцию
        </Button>
      </FormContainer>
      {true && (
        <FooterContext.Provider value={[footerText, setFooterText]}>
          <Foot>{footerText}</Foot>
        </FooterContext.Provider>
      )}
    </React.Fragment>
  );
};

export default Main;
