import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "./App.css";

export const App = () => {
  return (
    <div className="">
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


        <div className="dataCard customerCard">Uploaded songs to spotify every year.
          <Line
            data={{
              labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
              datasets: [
                {
                  label: "Uploaded songs",
                  data: [7e6, 15e6, 22e6, 22e6, 36e6, 40e6, 36e6],
                },
              ],
            }}
          />
        </div>

        <div className="dataCard customerCard">Spotify streams for songs uploaded in that year.
          <Line
            data={{
              labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
              datasets: [
                {
                  label: "Streams",
                  data: [4.24e9, 5.3e9, 3.67e9, 3.81e9, 4.27e9, 2.8e9, 3.51e9],
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App
