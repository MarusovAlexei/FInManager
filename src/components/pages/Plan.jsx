import React from "react";
import DataList from "../views/local/DatdList";

export default class Plan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <DataList data={this.props.statData} viewType={"расход"} />
      </>
    );
  }
}
