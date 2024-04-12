import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { VscThreeBars } from "react-icons/vsc";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentDate, setCurrentDate] = useState(getDate());
  const [users, setUsers] = useState([0]);
  const handleCheckbox = () => {};

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <VscThreeBars />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sidebar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card className="shadow-lg mb-4">
            <Card.Body>
              <Form.Label>Date Range</Form.Label>
              <Form.Group className="d-flex ">
                <Form.Text style={{}} className="m-1">
                  {currentDate}
                </Form.Text>
                <Form.Text style={{}} className="m-1">
                  01/01/2026
                </Form.Text>
              </Form.Group>
              <Form.Range />
            </Card.Body>
          </Card>
          <Card>
          <Card.Title>Agent's Name</Card.Title>
          <Card.Body>
            <Form>
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="Select all"
                // id={`default-${checkbox}`}
                // label={`default ${checkbox}`}
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user1"
                // id={`default-${checkbox}`}
                // label={`default ${checkbox}`}
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user2"
                // id={`default-${checkbox}`}
                // label={`default ${checkbox}`}
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user3"
                // id={`default-${checkbox}`}
                // label={`default ${checkbox}`}
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user4"
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user5"
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user6"
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user7"
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user8"
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user9"
                // id={`default-${checkbox}`}
                // label={`default ${checkbox}`}
              />
              <Form.Check // prettier-ignore
                type={"checkbox"}
                label="user10"
                // id={`default-${checkbox}`}
                // label={`default ${checkbox}`}
              />
          
            </Form>
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
