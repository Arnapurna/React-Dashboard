import React from "react";
// import { Bar } from "react-chartjs-2";
import { Chart } from "react-google-charts";
import Card from 'react-bootstrap/Card'


export const data = [
  ["City", "2010 Population"],
  ["New York City, NY", 8175000],
  ["Los Angeles, CA", 3792000],
  // ["Chicago, IL", 2695000],
  // ["Houston, TX", 2099000, 1953000],
  // ["Philadelphia, PA", 1526000, 1517000],
];
export const options = {
  chart: {
    title: " Disposition",
    // subtitle: "Based on most recent and previous census data",
  },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "City",
  },
  bars: "",
  axes: {
    y: {
      0: { side: "left" },
    },
  },
};

const Disposition = () => {
  return (
    <div className="shadow-lg" style={{borderRadius:"30px"}}>
    <Card style={{ borderRadius: "30px" }}>
    <Card.Body>
      <Chart
        chartType="Bar"
        // width="100%"
        height="150px"
        data={data}
        options={options}
      />
    </Card.Body>
    </Card>
    </div>
  );
};

export default Disposition;
