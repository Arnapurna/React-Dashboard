import React from "react";
import { useState } from "react";
import "../Home/Home.css";
// import "../Email/Email.css"
import Navigation from "../Navigation/Navigation";
import SideBarMenu from "../SideBarMenu";
import DateRange from "../Single/DateRange";
import AgentList from "../Single/AgentList";

// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
import Main2 from "../Main2/Main2";
import Disposition from "../Single/Disposition";
import InteractionDetails from "../Single/InteractionDetails";
import Language from "../Single/Language";
import SkillSet from "../Single/SkillSet";
import DisconnectionSource from "../Single/DisconnectionSource";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

const Email = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div className="container-fluid m-0">
      <div className="row">
        <div className="col-md-1 col-1 bg-dark p-0 sidebar ">
          <SideBarMenu />
        </div>
        <div className="col-md-11 col-11 main ">
          <div className="row mb-3 nav">
            <Navigation title="EMAIL DASHBOARD" />
          </div>
          <div className="row"
          //  style={{    margin: "0px -36px 0px -30px"}}
           >
            {/* First Row start */}
            <div className="row row-col-4">
              <div className="col-md-3 mb-2" style={{}}>
                <Main2 maxWidth="600px"/>
              </div>
              <div className="col-md-3">
                <div className="row mb-3 ms-2">
                  <DateRange />
                </div>
                <div className="row mb-2">
                  <AgentList />
                </div>
              </div>
              <div className="col-md-6">
                <div className="row mb-3">
                  <div className="col-md-6 mb-2">
                    <Disposition />
                  </div>
                  <div className="col-md-6">
                    <Language />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-2">
                    <InteractionDetails  height="200px"/>
                  </div>
                  <div className="col-md-4 mb-2">
                    <SkillSet height="200px" />
                  </div>
                  <div className="col-md-4 mb-2">
                    <DisconnectionSource height="200px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
