import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard">Chart 1
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Oliver",
                data: [200,300,400],
              },
              {
                label: "Teodor",
                data: [90, 80, 70],
              },
            ],
          }}
        />
        </div>


      <div className="dataCard customerCard">Chart 2</div>

      <div className="dataCard categoryCard">Chart 3</div>
      <div className="dataCard categoryCard">Chart 67</div>
      <p className="bg-black">hej</p>

    </div>
  );
};

export default App
