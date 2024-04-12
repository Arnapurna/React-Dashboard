import React from "react";
import { Chart } from "react-google-charts";
import Card from "react-bootstrap/Card";
// import '../../../node_modules/bootstrap/dist/css/bootstarp.min.css''

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "Interaction Mode",
  pieHole: 0.4,
};

const InteractionMode = () => {
  return (
    <div className="shadow-lg" style={{ borderRadius: "30px" }}>
      <Card style={{ borderRadius: "30px" }}>
        <Card.Body>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            // width="100%"
            height="145px"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default InteractionMode;
