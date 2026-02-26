import React from "react";
import { motion } from "motion/react";
import { Chart as ChartJS, scales, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, Bubble } from "react-chartjs-2";
import "./App.css";
import Stat from "./stat";

defaults.maintainAspectRation = false;
defaults.responsive = true;

export const App = () => {
  return (
    <div className="App">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.3, delay: 0 }}>
        Spotify
      </motion.h1>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.3, delay: 0.2 }}>
        <h2>
          en hemsida av oliver & teodor för{" "}
          <u>
            <a
              href="https://www.sh.se/program--kurser/program/grund/it-medier-och-design"
              target="_blank"
            >
              Södertörns Högskola
            </a>
          </u>
        </h2>
      </motion.div>

<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.3, delay: 0.3 }}>
      <p className="!text-5xl">
        I 2014 så räknades det fram att det fanns ungefär{" "}
        <span className="inText2">11 miljoner</span> artister hos Spotify vilket
        är en ökning på <span className="inText2">1.7 miljoner</span> från 2013.
        Med så här många artister vilka <em>lyssnar</em> faktiskt på musken?
      </p>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4 }}>
      <Line
        data={{
          labels: ["2016", "2018", "2020", "2022", "2023", "2024", "2025"], // ta bort allt annat än 2022 och framåt
          datasets: [
            {
              label: "Monthly Active Users (miljoner)",
              data: [100, 200, 345, 489, 602, 675, 751],
              backgroundColor: "rgb(135, 154, 57)",
              borderColor: "rgb(135, 154, 57)",
            },
            {
              label: "Premium (miljoner)",
              data: [30, 96, 155, 205, 236, 263, 290],
              backgroundColor: "rgb(67, 133, 190)",
              borderColor: "rgb(67, 133, 190)",
            },
          ],
        }}
      />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4 }}>
      <p>
        Som det visar på diagramet så har Spotifys mängd av användare ökat
        extremt, antalet "monthly users" gick från 489 miljoner till{" "}
        <span className="inText"> 751 miljoner </span> på bara tre år. Detta är
        en ökning på över <span className="inText"> 260 miljoner </span>{" "}
        användare. Trots att streamingmarknaden inte är ny och spännande längre
        så ökar användar basen fortfarande kraftigt.
      </p>
            </motion.div>
      <p className="litenText">https://investors.spotify.com</p>
      {/* <p>Streaming står för</p>
      <div className="flex">
        <Stat
          statNumber="65%"
          statText="Globala musikintäkter"
          statColor="red"
        />
        <Stat
          statNumber="65%"
          statText="Globala musikintäkter"
          statColor="red"
        />
        <Stat
          statNumber="65%"
          statText="Globala musikintäkter"
          statColor="red"
        />
      </div> */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0}} transition={{ duration: 0.5, delay: 0.4 }}>
      <Bar
        options={{
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
        }}
        data={{
          labels: ["2022", "2023", "2024"],

          datasets: [
            {
              label: "Streamingökning",
              data: [11.4, 10.4, 7.3],
              backgroundColor: "rgb(102, 128, 11)",
              borderColor: "rgb(102, 128, 11)",
            },

            {
              label: "Vinylökning",
              data: [3.8, 13.4, -4],
              backgroundColor: "rgb(67, 133, 190)",
              borderColor: "rgb(67, 133, 190)",
            },
          ],
        }}
      />
      </motion.div>
      <p className="litenText">IFPI Global Music Report 2023–2025</p>
      {/* 
      <p>
        Fysis musik har fortfarande stor betydelse men som vi ser så sjönk vinylen 2024 medan streaming fortästter att öka.
      </p> */}

      {/* <Line
        data={{
          labels: ["2024", "2025"],
          datasets: [
            {
              label: "Intäkter (miljarder euro)",
              data: [14.8, 18.0],
              backgroundColor: "rgb(67, 133, 190)",
              borderColor: "rgb(67, 133, 190)",
            },
            {
              label: "Utbetalningar till musik (miljarder euro)", // Ändra till SEK, USD eller Euro vi får bestämma
              data: [9.4, 10.3],
              backgroundColor: "rgb(102, 128, 11)",
              borderColor: "rgb(102, 128, 11)",
            },
          ],
        }}
      /> */}

      <p>
        "That’s why this year our{" "}
        <span className="inText">number one priority</span> is to help more new
        music and new artists cut through the noise and form real connections
        with fans."
      </p>
      <p className="litenText">
        Direkt citat från spotify 2026 (Loud & Clear / Spotify newsroom)
      </p>
      <Bar
        data={{
          labels: [
            "Spotify intäkter",
            "Utbetalningar till industrin",
            "Topp 1% artister (uppskattat)",
            "Övriga artister",
          ],
          datasets: [
            {
              label: "2025 (miljarder euro)",
              data: [18.0, 10.3, 7.2, 3.1],
              backgroundColor: [
                "rgb(102, 128, 11)",
                "rgb(87, 108, 11)",
                "rgb(64, 79, 8)",
                "rgb(39, 48, 5)",
              ],
              borderColor: "rgb(102, 128, 11)",
            },
          ],
        }}
      />
      <p>
        Spotify betalde alltså ut över{" "}
        <span className="inText">10 miljarder euro</span> till musik industrin
        bara 2025. Trots det så är en extremt stor del av intäkterna som går
        till topp 1% av artisterna och majoriteten delar på den relativt lilla
        andelen av intäkterna.
      </p>
      <p className="litenText">https://loudandclear.byspotify.com</p>

      <Bar
        data={{
          labels: ["2024"],
          datasets: [
            {
              label: "Artister på Spotify",
              data: [11e7],
              backgroundColor: "rgb(67, 133, 190)",
              borderColor: "rgb(67, 133, 190)",
            },
            {
              label: "Artister som har mer än 10 lyssnare per månad",
              data: [1.58e7],
              backgroundColor: "rgb(102, 128, 11)",
              borderColor: "rgb(102, 128, 11)",
            },
            {
              label: "Artister med mer än 1000 lyssnare per månad",
              data: [742600],
              backgroundColor: "#C0A0E9",
              borderColor: "#C0A0E9",
            },
          ],
        }}
      />

      <p>
        Det finns en enorm mängd av artister på Spotify, dock är det en väldigt
        liten andel som når några lyssnare alls. Att ha fler än 1000 lyssnare
        per månad på Spotify är ovanligt i jämförelse med hur många som kämpar
        för att hitta sin publik.
      </p>
      <p className="litenText">
        Loud & Clear by Spotify (2024) + RouteNote-analys.
      </p>

      <Stat
        statNumber="'Spotify pays $0.003- $0.005 per stream'"
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
              backgroundColor: "rgb(102, 128, 11)",
              borderColor: "rgb(102, 128, 11)",
            },
            {
              label: "Artister som tjänar mer än 10,000kr per månad",
              data: [2860000],
              backgroundColor: "rgb(67, 133, 190)",
              borderColor: "rgb(67, 133, 190)",
            },
          ],
        }}
        options={{
          indexAxis: "y",
        }}
      />
      <p>
        Detta betyder alltså att ungerfär <span className="inText">2.6%</span>{" "}
        av alla artister på Spotify tjänar mer än 10 000kr per månad på
        streaming. Med andra ord så gör ungefär{" "}
        <span className="inText">97.4%</span> inte det.
      </p>
      <p className="litenText">
        Loud & Clear by Spotify, Variety, Musician Wave & Soundcharts
      </p>
      <Line
        data={{
          labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Låtar uppladdade på Spotify",
              data: [7e6, 15e6, 22e6, 22e6, 36e6, 40e6, 36e6],
              backgroundColor: "rgb(102, 128, 11)",
              borderColor: "rgb(102, 128, 11)",
            },
          ],
        }}
      />
      <p className="litenText">
        Spotify for Artists Blog och Music Business Worldwide
      </p>

      {/* <Line
        data={{
          labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
          datasets: [
            {
              label: "Streams",
              data: [4.24e9, 5.3e9, 3.67e9, 3.81e9, 4.27e9, 2.8e9, 3.51e9],
              backgroundColor: "rgb(67, 133, 190)",
              borderColor: "rgb(67, 133, 190)",
            },
          ],
        }}
      /> */}
    </div>
  );
};

export default App;
