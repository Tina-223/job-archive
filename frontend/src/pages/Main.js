import React, { Component } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Link as ScrollLink } from "react-scroll";
import Maincard from "./Maincard";

import "../style/main.css";

class Main extends Component {
  render() {
    return (
      <>
        <div className="main">
          <div className="main__inner">
            <h1>채용 정보 모음 서비스</h1>
            <SearchBar />
            <br />
            <h5>스크롤을 밑으로 내려 더 많은 정보를 확인해보세요!</h5>
            {/* 화살표 */}
          </div>
        </div>
        <Maincard logged={this.props.logged} userId={this.props.userId}/>
      </>
    );
  }
}
export default Main;
