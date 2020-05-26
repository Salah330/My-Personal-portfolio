import React, { Component } from "react";
import { placeInfo, detailInfo } from "../data";

const Context = React.createContext();

class ContextProvider extends Component {
  state = {
    info: placeInfo,
    detail: detailInfo,
  };
  getItem = (id) => {
    const project = this.state.info.find((item) => item.id === id);
    return project;
  };
  handleDetails = (id) => {
    const projectt = this.getItem(id);
    this.setState(() => {
      return { detail: projectt };
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          info: this.state.info,
          detail: this.state.detail,
          getItem: this.getItem,
          handleDetails: this.handleDetails,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
const ContextConsumer = Context.Consumer;
export { ContextProvider, ContextConsumer };
