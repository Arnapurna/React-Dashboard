import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VscThreeBars } from "react-icons/vsc";

import { FaHome } from "react-icons/fa";
import { MdRecordVoiceOver } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBarMenu = ({ width, children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const menuItems = [
    {
      path: "/",
      name: "home",
      icon: <FaHome size={25} style={{color:"white"}}/>,
    },
    {
      path: "/voice",
      name: "voice",
      icon: <MdRecordVoiceOver size={25} style={{color:"white"}}/>,
    },
    {
      path: "/chat",
      name: "chat",
      icon: <IoChatboxEllipses size={25} style={{color:"white"}}/>,
    },
    {
      path: "/email",
      name: "email",
      icon: <MdEmail size={25} style={{color:"white"}}/>,
    },
  ];
  return (
    <>
      <Container
        className="m-0 p-0 d-flex flex-column"
        variant="dark"
        style={{minHeight: "100vh" }}
      >
        <div className="m-2 p-2">
          {/* <Button variant="dark" onClick={handleShow}> */}
            {/* <VscThreeBars size={25} style={{color:"white"}}/>
            <hr /> */}
          {/* </Button> */}
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            // className="link"
            // activeClassName="active"
          >
            <div className="icon pt-2 pb-2">{item.icon}</div>
            {/* <div className="link_text">{item.name}</div> */}
          </NavLink>
        ))}
        </div>
        {/* <Offcanvas variant="dark" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Sidebar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body></Offcanvas.Body>
        </Offcanvas> */}
      </Container>
    </>
  );
};

export default SideBarMenu;
