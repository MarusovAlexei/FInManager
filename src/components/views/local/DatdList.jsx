import React from "react";
import css from "../../../styles/dataList.css";

const { DataContainer, ContentLine, ContentCell } = css;

const DataList = () => {
  return (
    <React.Fragment>
      <DataContainer>
        {Array(4)
          .fill(null)
          .map((item, index) => {
           return ( <ContentLine>
              <ContentCell width={"20%"}>{"10000"}</ContentCell>
              <ContentCell width={"20%"}>{"доход"}</ContentCell>
              <ContentCell width={"60%"}>{"раздавал листовки"}</ContentCell>
            </ContentLine> )
          })}
      </DataContainer>
    </React.Fragment>
  );
};

export default DataList;
