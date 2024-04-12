import React from "react";
import { Chart } from "react-google-charts";
import Card from "react-bootstrap/Card";

export const data = [
  ["City", "2010 Population"],
  ["New York City, NY", 8175000],
  ["Los Angeles, CA", 3792000],
  ["Chicago, IL", 2695000],
  ["Houston, TX", 2099000],
  ["Philadelphia, PA", 1526000],
];
export const options = {
  chart: {
    title: "Language",
  },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  bars: "top",
  axes: {
    y: {
      0: { side: "top" },
    },
  },
};

const Language = () => {
  return (
    <div className="shadow-lg" style={{ borderRadius: "30px" }}>
      <Card style={{ borderRadius: "30px" }}>
        <Card.Body>
          <Chart
            chartType="Bar"
            data={data}
            options={options}
            // width="100%"
            height="150px"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Language;
