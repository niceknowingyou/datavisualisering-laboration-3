import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, Bubble } from "react-chartjs-2";
import "./App.css";
import Stat from "./stat";

export const App = () => {
  return (
    <div className="App">
      <h1>Spotify</h1>
      <h2>
        en hemsida av oliver & teodor för{" "}
        <u>
          <a href="https://www.sh.se/program--kurser/program/grund/it-medier-och-design">
            Södertörns Högskola
          </a>
        </u>
      </h2>
      <p>
        I 2014 så räknades det fram att det fanns ungefär{" "}
        <span className="inText">11 miljoner</span> artister hos Spotify vilket
        är en ökning på <span className="inText">1.7 miljoner</span> från 2013.
        Med så här många artister vilka <em>lyssnar</em> faktiskt på musken?
      </p>
      <Line
        data={{
          labels: ["2016", "2018", "2020", "2022", "2023", "2024", "2025"],
          datasets: [
            {
              label: "Monthly Active Users (miljoner)",
              data: [100, 200, 345, 489, 602, 675, 751],
            },
            {
              label: "Premium (miljoner)",
              data: [30, 96, 155, 205, 236, 263, 290],
            },
          ],
        }}
      />

      <Bar
        data={{
          labels: ["2024"],
          datasets: [
            {
              label: "Artister på Spotify",
              data: [11e7],
            },
            {
              label: "Artister som har mer än 10 lyssnare per månad",
              data: [1.58e7],
            },
            {
              label: "Artister med mer än 1000 lyssnare per månad",
              data: [742600],
            },
          ],
        }}
      />

      <Stat
        statNumber="Spotify pays $0.003- $0.005 per stream"
        statText="Det blir ~$4.000 för 1 miljon streams"
        statColor="red"
      />
      <Bar
        data={{
          labels: ["2024"],
          datasets: [
            {
              label: "Artister på Spotify",
              data: [11e7],
            },
            {
              label: "Artister som tjänar mer än 10,000kr per månad",
              data: [2860000],
            },
          ],
        }}
        options={{
          indexAxis: "y",
        }}
      />

      <Line
        data={{
          labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Låtar uppladdade på Spotify",
              data: [7e6, 15e6, 22e6, 22e6, 36e6, 40e6, 36e6],
            },
          ],
        }}
      />

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
  );
};

export default App;
