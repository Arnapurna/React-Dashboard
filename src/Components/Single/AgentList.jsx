import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../Home/Home.css";

const AgentList = () => {
  const [agentList, setAgentList] = useState([
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",
    "user1",
    "user2",
    "user3",
    "user4",
    "user5",
    "user6",
    "user7",
    "user8",
    "user9",
    "user10",

  ]);
  return (
    <div>
      <Card className="shadow-lg" style={{ borderRadius: "30px" }}>
        <Card.Title className="p-2 center">Agent's Name</Card.Title>
        <Card.Body>
        <div className="agent_list">
          <Form className="agent_list_scroll">
            <Form.Check type={"checkbox"} label="Select all"  />
            {/* Agent list array map */}
            {agentList.map((agent, index) => (
              <Form.Check key={index} type="checkbox" label={agent} />
            ))}
            
          </Form>
        </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AgentList;
