import React from "react";
import InputComponent from "../comps/Input";
import css from "../../styles/form.css";

import { useSelector, useDispatch } from "react-redux";
import {
  changeViewType,
  changeComment,
  changeValue,
} from "../../redux-state/reducers/view-type-for-main";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const { FormContainer, Button } = css;

const Main = (props) => {
  const { action } = props;

  const dispatch = useDispatch();
  const viewType = useSelector((state) => state.viewTypeMain.viewType);
  const viewValue = useSelector((state) => state.viewTypeMain.value);
  const viewComment = useSelector((state) => state.viewTypeMain.comment);

  // the correctness of the entered data
  const validation = () => {
    if (viewValue !== "" && viewType !== "" && viewComment !== "") {
      // add dataLine in list
      const dataLine = `${viewValue}::${viewType}::${viewComment}`;

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

  return (
    <React.Fragment>
      <FormContainer style={{ alignItems: "flex-start" }}>
        <InputComponent
          inputValue={viewValue}
          action={handleChangeValue}
          placeholder={"Введите сумму транзакции"}
        />
        <FormControl style={{ marginTop: "9px", marginBottom: "12px" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            Выберите тип транзакции
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
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
    </React.Fragment>
  );
};

export default Main;
