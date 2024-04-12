import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

const DateRange = () => {
  const [startDate, setStartDate] = useState(getDate());
  const [endDate, setEndDate] = useState("01/01/2026");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <Card className="shadow-lg" style={{ borderRadius: "30px", height: "180px" }}>
      <Card.Body>
        <Form.Label>Date Range</Form.Label>

        <Form.Group className="d-flex ">
          <Form.Control type="text" value={startDate} onChange={handleStartDateChange} className="m-1" />
          <Form.Control type="text" value={endDate} onChange={handleEndDateChange} className="m-1" />
        </Form.Group>
        <Form.Range />
      </Card.Body>
    </Card>
  );
};

export default DateRange;


// import React from "react";
// import { useState } from "react";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";

// function getDate() {
//   const today = new Date();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date = today.getDate();
//   return `${date}/${month}/${year}`;
// }
// const DateRange = () => {
//   // const currentDate=getDate();
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [currentDate, setCurrentDate] = useState(getDate());
//   const [users, setUsers] = useState([0]);
//   const handleCheckbox = () => {};
//   return (
//     <Card
//       className="shadow-lg"
//       style={{ borderRadius: "30px", height: "180px" }}
//     >
//       <Card.Body>
//         <Form.Label>Date Range</Form.Label>
//         <Form.Group className="d-flex ">
//           <Form.Text style={{}} className="m-1">
//             {currentDate}
//           </Form.Text>
//           <Form.Text style={{}} className="m-1">
//             01/01/2026
//           </Form.Text>
//         </Form.Group>
//         <Form.Range />
//       </Card.Body>
//     </Card>
//   );
// };

// export default DateRange;
