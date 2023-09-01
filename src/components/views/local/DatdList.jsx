import React from "react";
import { useNavigate } from "react-router-dom";
import css from "../../../styles/dataList.css";

const { DataContainer, ContentLine, ContentCell, ButtonsLine, ButtonItem } =
  css;

const DataList = (props) => {
  const { data = [], setShowChart, viewType } = props;
  const navigate = useNavigate();
  const filterData = data.filter((item) => item.split("::")[1] === viewType);
  const filterDataSumm = data
    .filter((item) => item.split("::")[1] === viewType)
    .reduce((summ, item) => {
      return summ + +item.split("::")[0].split(" ")[0];
    }, 0);

  const filterDataDelta = data.reduce((summ, item) => {
    if (item.split("::")[1] === "доход") {
      return summ + +item.split("::")[0].split(" ")[0];
    } else {
      return summ - +item.split("::")[0].split(" ")[0];
    }
  }, 0);

  const reduceDataType1 = () => {
    setShowChart(false);
    navigate("/stat/доход");
  };

  const reduceDataType2 = () => {
    setShowChart(true);
    navigate("/stat/расход");
  };

  const reduceDataType3 = () => {
    setShowChart(true);
    navigate("/stat/общая");
  };

  return (
    <React.Fragment>
      <ButtonsLine>
        <ButtonItem
          style={{ fontWeight: viewType === "доход" ? "bold" : "" }}
          onClick={reduceDataType1}
        >
          доходы
        </ButtonItem>
        <ButtonItem
          style={{ fontWeight: viewType === "расход" ? "bold" : "" }}
          onClick={reduceDataType2}
        >
          расходы
        </ButtonItem>
        <ButtonItem
          style={{ fontWeight: viewType === " " ? "bold" : "" }}
          onClick={reduceDataType3}
        >
          общая информация
        </ButtonItem>
      </ButtonsLine>
      <DataContainer>
        {filterData.length > 0 && (
          <React.Fragment>
            {filterData.map((item, index) => {
              return (
                <ContentLine key={index}>
                  <ContentCell width={"20%"}>{item.split("::")[0]}</ContentCell>
                  <ContentCell width={"20%"}>{item.split("::")[1]}</ContentCell>
                  <ContentCell width={"60%"}>{item.split("::")[2]}</ContentCell>
                </ContentLine>
              );
            })}
            <ContentLine>
              <ContentCell width={"20%"}>{filterDataSumm}</ContentCell>
              <ContentCell width={"20%"}>---</ContentCell>
              <ContentCell width={"60%"}>---</ContentCell>
            </ContentLine>
          </React.Fragment>
        )}
        {filterData.length === 0 && (
          <React.Fragment>
            {data.map((item, index) => {
              return (
                <ContentLine key={index}>
                  <ContentCell width={"20%"}>{item.split("::")[0]}</ContentCell>
                  <ContentCell width={"20%"}>{item.split("::")[1]}</ContentCell>
                  <ContentCell width={"60%"}>{item.split("::")[2]}</ContentCell>
                </ContentLine>
              );
            })}
            <ContentLine>
              <ContentCell width={"20%"}>{filterDataDelta}</ContentCell>
              <ContentCell width={"20%"}>---</ContentCell>
              <ContentCell width={"60%"}>---</ContentCell>
            </ContentLine>
          </React.Fragment>
        )}
      </DataContainer>
    </React.Fragment>
  );
};

export default DataList;
