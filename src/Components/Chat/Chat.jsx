import React from "react";
import Navigation from "../Navigation/Navigation";
import "../Home/Home.css";

import SideBarMenu from "../SideBarMenu";
import DateRange from "../Single/DateRange";
import AgentList from "../Single/AgentList";
import Main2 from "../Main2/Main2";

import InteractionDetails from "../Single/InteractionDetails";
import Disposition from "../Single/Disposition";
import Language from "../Single/Language";
import InteractionMode from "../Single/InteractionMode";
import SkillSet from "../Single/SkillSet";
import DisconnectionSource from "../Single/DisconnectionSource";

const Chat = () => {
  return (
<div className="container-fluid">
      <div className="row">
        <div className="col-md-1 col-1 bg-dark p-0 sidebar ">
          <SideBarMenu />
        </div>
        <div className="col-md-11 col-11 main ">
          <div className="row mb-2">
            <Navigation title="CHAT DASHBOARD" />
          </div>
          <div className="row">
            <div className="row row-col-4">
              <div className="col-md-3 ">
                <DateRange />
              </div>
              <div className="col-md-3 mb-2">
                <InteractionDetails  height="145px"/>
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
            <div className="row row-col-2 mb-3">
              <div className="col-md-3 mb-2">
                <AgentList />
              </div>
              <div className="col-md-9">
                <div className="row row-col-3">
                  <div className="col-md-4 mb-2">
                    <InteractionMode height="145px"/>
                  </div>
                  <div className="col-md-4 mb-2">
                    {" "}
                    <SkillSet  height="145px"/>
                  </div>
                  <div className="col-md-4 mb-2">
                    {" "}
                    <DisconnectionSource height="145px" />
                  </div>
                </div>
                <div className="row mb-2">
                  <Main2 />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <Container fluid>
    //     <Row>
    //       <Col xs={12}>
    //         <Navigation title="CHAT DASHBOARD" />
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={12}>
    //         <Row className=" mb-2">
    //           <Col xs={12} md={4}>
    //             <InteractionDetails />
    //           </Col>
    //           <Col xs={12} md={4}>
    //             <Disposition />
    //           </Col>
    //           <Col xs={12} md={4}>
    //             <Language />
    //           </Col>
    //         </Row>
    //         <Row className="mb-3">
    //           <Col xs={12} md={4}>
    //             <InteractionMode />
    //           </Col>
    //           <Col xs={12} md={4}>
    //             <SkillSet />
    //           </Col>
    //           <Col xs={12} md={4}>
    //             <DisconnectionSource />
    //           </Col>
    //         </Row>
    //         <Row className="mb-3">
    //           <Main2 />
    //         </Row>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>

    // <div>
    //   <Container fluid>
    //     <Row fluid>
    //       <Col>
    //         <Navigation title="CHAT DASHBOARD" />
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={3}>
    //         <Sidebar />
    //       </Col>
    //       <Col>
    //         <Main1 />
    //         <Main3 />
    //         <Main2 />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default Chat;
