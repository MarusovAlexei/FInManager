import React from "react";
import Foot from "../views/global/Foot";
import DataList from "../views/local/DataList";

export default class Plan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <DataList data={this.props.statData} viewType={"расход"} />
        <Foot></Foot>
      </>
    );
  }
}
