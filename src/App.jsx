import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData as setDataFromRedux } from "./redux-state/reducers/data";
import { Route, Routes } from "react-router-dom";
import Head from "./components/views/global/Head";
import Foot from "./components/views/global/Foot";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";

function App() {
  const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();

  const setData = (param) => dispatch(setDataFromRedux(param));

  return (
    <React.Fragment>
      <Head></Head>

      <Routes>
        <Route path={"/main"} element={<Main action={setData} />} />
        <Route path={"*"} element={<Main action={setData} />} />
        <Route path={"/stat/:viewType"} element={<Stat statData={data} />} />
        <Route path={"/plan"} element={<Plan statData={data} />} />
      </Routes>

      <Foot></Foot>
    </React.Fragment>
  );
}

export default App;
