import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// import { CgTime } from "react-icons/cg";
import { BiSolidTimeFive, BiTransfer } from "react-icons/bi";
import { MdOutlinePhoneInTalk } from "react-icons/md";

import ListGroup from "react-bootstrap/ListGroup";

const Main2 = (props) => {
  return (
    <Container className="" style={{marginRight:"0",maxWidth: "props.width"}}>
      <Card className="shadow-lg border-0" style={{ borderRadius: "30px" }}>
        <Card.Body>
        <Row>
          <Col className="d-flex align-items-center">
          <ListGroup.Item
              className=" d-flex align-items-center"
              style={{ border: "none" }}
            >
              <BiSolidTimeFive size={50} style={{}} />
              <div className="m-2 fs-10">
                <Card.Title>487:29:54</Card.Title>
                <Card.Text>Total interaction time</Card.Text>
              </div>
            </ListGroup.Item>
          </Col>
          <Col className="d-flex align-items-center"><ListGroup.Item
              className=" d-flex align-items-center"
              style={{ border: "none" }}
            >
              <BiTransfer size={50} />
              <div className="m-2 fs-10">
                <Card.Title>120:51:35</Card.Title>
                <Card.Text>Total transfer time</Card.Text>
              </div>
            </ListGroup.Item></Col>
          <Col className="d-flex align-items-center"><ListGroup.Item
              className="d-flex align-items-center"
              style={{ border: "none" }}
            >
              <BiSolidTimeFive size={50} style={{}} />
              <div className="m-2 fs-10">
                <Card.Title>02:12:39</Card.Title>
                <Card.Text>Total Conference time</Card.Text>
              </div>
            </ListGroup.Item></Col>
          <Col className="d-flex align-items-center"> <ListGroup.Item
              className="d-flex align-items-center"
              style={{ border: "none" }}
            >
              <MdOutlinePhoneInTalk size={50} style={{color:"lightcoral"}} />
              <div className="m-2 fs-10">
                <Card.Title>00:00:00</Card.Title>
                <Card.Text>Total hold time(HH:MM:SS)</Card.Text>
              </div>
            </ListGroup.Item></Col>
        </Row>
          {/* <ListGroup
            horizontal
            variant="flush"
            className="d-flex justify-content-between align-items-center flex-wrap"
          > */}
            
            {/* <ListGroup.Item
              className=" d-flex align-items-center"
              style={{ border: "none" }}
            >
              <BiTransfer size={40} />
              <div className="m-2 fs-10">
                <Card.Title>120:51:35</Card.Title>
                <Card.Text>Total transfer time</Card.Text>
              </div>
            </ListGroup.Item> */}
            {/* <ListGroup.Item
              className="d-flex align-items-center"
              style={{ border: "none" }}
            >
              <BiSolidTimeFive size={40} style={{}} />
              <div className="m-2 fs-10">
                <Card.Title>02:12:39</Card.Title>
                <Card.Text>Total Conference time</Card.Text>
              </div>
            </ListGroup.Item> */}
            {/* <ListGroup.Item
              className="d-flex align-items-center"
              style={{ border: "none" }}
            >
              <MdOutlinePhoneInTalk size={40} style={{}} />
              <div className="m-2 fs-10">
                <Card.Title>00:00:00</Card.Title>
                <Card.Text>Total hold time(HH:MM:SS)</Card.Text>
              </div>
            </ListGroup.Item> */}
          {/* </ListGroup> */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Main2;
