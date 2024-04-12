import React from "react";
import Navigation from "../Navigation/Navigation";
import Main2 from "../Main2/Main2";
import "../Home/Home.css";

import InteractionDetails from "../Single/InteractionDetails";
import Disposition from "../Single/Disposition";
import Language from "../Single/Language";
import InteractionMode from "../Single/InteractionMode";
import SkillSet from "../Single/SkillSet";
import DisconnectionSource from "../Single/DisconnectionSource";
import SideBarMenu from "../SideBarMenu";
import DateRange from "../Single/DateRange";
import AgentList from "../Single/AgentList";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1 col-1 bg-dark p-0 sidebar ">
          <SideBarMenu />
        </div>
        <div className="col-md-11 col-11 main ">
          <div className="row mb-2">
            <Navigation title="OVERALL DASHBOARD" />
          </div>
          <div className="row">
            {/* First Row start */}
            <div className="row row-col-4">
              <div className="col-md-3 mb-1">
                <DateRange />
              </div>
              <div className="col-md-3 mb-2">
                <InteractionDetails height="150px"/>
              </div>
              <div className="col-md-3 mb-2" >
                <Disposition />
              </div>
              <div className="col-md-3 mb-2">
                <Language />
              </div>
            </div>
            {/* First Row end */}
            {/* Second Row start */}
            <div className="row row-col-2 mb-2">
              <div className="col-md-3 mb-2">
                <AgentList />
              </div>
              <div className="col-md-9">
                <div className="row mb-2 ">
                  <Main2 />
                </div>
                <div className="row row-col-3">
                  <div className="col-md-4 mb-2">
                    <InteractionMode height="150px"/>
                  </div>
                  <div className="col-md-4 mb-2">
                    {" "}
                    <SkillSet height="150px"/>
                  </div>
                  <div className="col-md-4 mb-2">
                    {" "}
                    <DisconnectionSource height="150px"/>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
