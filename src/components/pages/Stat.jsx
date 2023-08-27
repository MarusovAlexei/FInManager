import React from "react";
import Head from "../views/global/Head";
import Foot from "../views/global/Foot";
import DataList from "../views/local/DatdList";

const Stat = () => {
  return (
    <React.Fragment>
      <Head></Head>
      <DataList data={[]}></DataList>
      <Foot></Foot>
    </React.Fragment>
  );
};

export default Stat;
