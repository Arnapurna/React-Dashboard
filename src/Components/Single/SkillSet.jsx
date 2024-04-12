import React from "react";
import { Chart } from "react-google-charts";
import Card from "react-bootstrap/Card";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: " SkillSet",
};

const SkillSet = (props) => {
  return (
    <div className="shadow-lg" style={{ borderRadius: "30px" }}>
      <Card style={{ borderRadius: "30px" }}>
        <Card.Body>
          <Chart
            chartType="PieChart"
            // width="100%"
            height={props.height}
            data={data}
            options={options}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default SkillSet;
