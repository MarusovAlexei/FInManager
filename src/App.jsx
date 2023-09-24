import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData as setDataFromRedux } from "./redux-state/reducers/data";
import { Route, Routes } from "react-router-dom";
import Head from "./components/views/global/Head";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import css from "./styles/main.css";

function App() {
  const data = useSelector((state) => state.dataReducer.data);
  const dispatch = useDispatch();

  const setData = (param) => dispatch(setDataFromRedux(param));

  const { MainContainer } = css;
  return (
    <React.Fragment>
      <Head></Head>
      <MainContainer>
        <Routes>
          <Route path={"/main"} element={<Main action={setData} />} />
          <Route path={"*"} element={<Main action={setData} />} />
          <Route path={"/stat/:viewType"} element={<Stat statData={data} />} />
        </Routes>
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
