import React, { useState } from "react";
import Head from "./components/views/global/Head";
import Foot from "./components/views/global/Foot";
import Main from "./components/pages/Main";
import Stat from "./components/pages/Stat";
import Plan from "./components/pages/Plan";

function App() {
  const [showPage, setShowPage] = useState("main");

  // state of the list of entered data
  const [data, setData] = useState([]);

  return (
    <React.Fragment>
      <Head action={setShowPage}></Head>
      {showPage === "main" ? (
        <Main action={setData}></Main>
      ) : showPage === "stat" ?(
        <Stat statData={data}></Stat>
      ):(
        <Plan statData={data}></Plan>
      )
      }
      <Foot></Foot>
    </React.Fragment>
  );
}

export default App;
