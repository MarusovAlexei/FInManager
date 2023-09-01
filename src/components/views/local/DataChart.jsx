import React, { useState, useEffect } from "react";
import css from "../../../styles/dataList.css";
import { ResponsivePie } from "@nivo/pie";

const { DataContainer } = css;

const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "left",
        direction: "column",
        justify: false,
        translateX: -70,
        translateY: -110,
        itemsSpacing: 12,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

const DataChart = (props) => {
  const { data = [], show } = props;
  const filterData = data.filter((item) => item.split("::")[1] === "расход");

  const [r01, setR01] = useState(0);
  const [r02, setR02] = useState(0);
  const [r03, setR03] = useState(0);
  const [r04, setR04] = useState(0);
  const [r05, setR05] = useState(0);
  const [r06, setR06] = useState(0);

  useEffect(() => {
    for (let i = 0; i < filterData.length; i++) {
      if (filterData[i].split("::")[2] === "покупка продуктов") {
        setR01((prev) => prev + +filterData[i].split("::")[0]);
      }
      if (filterData[i].split("::")[2] === "оплата счетов") {
        setR02((prev) => prev + +filterData[i].split("::")[0]);
      }
      if (filterData[i].split("::")[2] === "покупка одежды") {
        setR03((prev) => prev + +filterData[i].split("::")[0]);
      }
      if (filterData[i].split("::")[2] === "расходы на транспорт") {
        setR04((prev) => prev + +filterData[i].split("::")[0]);
      }
      if (filterData[i].split("::")[2] === "развлечения") {
        setR05((prev) => prev + +filterData[i].split("::")[0]);
      }
      if (filterData[i].split("::")[2] === "путешествия") {
        setR06((prev) => prev + +filterData[i].split("::")[0]);
      }
    }
  }, []);

  return (
    <React.Fragment>
      {show && (
        <DataContainer style={{ height: "500px" }}>
          <MyResponsivePie
            data={[
              {
                id: "покупка продуктов",
                label: "покупка продуктов",
                value: r01,
                color: "hsl(169, 70%, 50%)",
              },
              {
                id: "оплата счетов",
                label: "оплата счетов",
                value: r02,
                color: "hsl(113, 70%, 50%)",
              },
              {
                id: "покупка одежды",
                label: "покупка одежды",
                value: r03,
                color: "hsl(104, 70%, 50%)",
              },
              {
                id: "расходы на транспорт",
                label: "расходы на транспорт",
                value: r04,
                color: "hsl(128, 70%, 50%)",
              },
              {
                id: "развлечения",
                label: "развлечения",
                value: r05,
                color: "hsl(70, 70%, 50%)",
              },
              {
                id: "путешествия",
                label: "путешествия",
                value: r06,
                color: "hsl(70, 70%, 60%)",
              },
            ].filter(item => item.value > 0)}
          ></MyResponsivePie>
        </DataContainer>
      )}
    </React.Fragment>
  );
};

export default DataChart;
