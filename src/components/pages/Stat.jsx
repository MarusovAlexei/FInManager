import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DataList from "../views/local/DataList";
import DataChart from "../views/local/DataChart";
import Foot from "../views/global/Foot";

const Stat = (props) => {
  const { statData } = props;
  const [isShowChart, setIsShowChart] = useState(true);

  const { viewType } = useParams();

  return (
    <React.Fragment>
      <DataList
        data={statData}
        setShowChart={setIsShowChart}
        viewType={viewType}
      />
      <DataChart data={statData} show={isShowChart} viewType={viewType} />
      <Foot></Foot>
    </React.Fragment>
  );
};

export default Stat;
