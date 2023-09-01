import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Head from "./components/views/global/Head";
import Foot from "./components/views/global/Foot";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";

function App() {
  // state of the list of entered data
  const [data, setData] = useState([]);

  return (
    <React.Fragment>
      <Head></Head>

      <Routes>
        <Route path={"/main"} element={<Main action={setData} />} />
        <Route path={"*"} element={<Main action={setData} />} />
        <Route path={"/stat/:viewType"} element={<Stat statData={data} />} />
        <Route path={"/plan"} element={<Plan />} />
      </Routes>

      <Foot></Foot>
    </React.Fragment>
  );
}

export default App;
