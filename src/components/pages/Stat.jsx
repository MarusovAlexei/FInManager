import React, { useState } from "react";
import DataList from "../views/local/DatdList";
import DataChart from "../views/local/DataChart";

const Stat = (props) => {
  const { statData } = props;
  const [isShowChart, setIsShowChart] = useState(false);

  return (
    <React.Fragment>
      <DataList data={statData} setShowChart={setIsShowChart} />
      <DataChart data={statData} show={isShowChart} />
    </React.Fragment>
  );
};

export default Stat;
