/*
Plots the desired data as a time series line graph.
Currently, takes CO2 concentration data from "server" and graphs it.
Can be easily modified for other time series data.

Returns div of the interactive graph.
Styled in ImagePlot.modules.css.
*/

import styles from "./ImagePlot.module.css";
import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const ImagePlot = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/NavSous/Software-Studio-Project/data/co2.csv')
      .then(response => response.text())
      .then(data => {

        let datapoints = data.split("\n").slice(1, -1).map(point => {
          return parseFloat(point.split(",")[1])
          // let parsed = point.split(",").map(y => {
          //   return parseFloat(y);
          // });
        })
        console.log(datapoints)
        setData({
            // labels: Array.from(datapoints.length).map(i => i),
            labels: [...Array(datapoints.length).keys()].map(day => {
              var date = new Date();
              date.setDate(date.getDate() - day)
              var dd = String(date.getDate()).padStart(2, '0');
              var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
              var yyyy = date.getFullYear();
              var date_str = mm + '/' + dd + '/' + yyyy;
              return date_str
            }).reverse(),
            datasets: [{
            label: "ppm",
            data: datapoints.reverse(),
            borderColor: "rgba(0,0,0,0.7)",
            backgroundColor: 'black',
            color: "black"
            }]
        })

      })
      .catch(err => console.error(err));
  },[])


  const options = {
    responsive: true,
    layout: {
      padding: 30
      // {
      //   top: 400,
      //   bottom: 0,
      //   left: 200,
      //   right: 200
      // }
    },
    plugins: {
      legend: {
        // position: 'top',
        display: false, 
      },
      title: {
        display: true,
        text: 'Bay Meadows Daily CO2 Concentration (ppm)',
        font: {
          size: 14.,
          color: "black"
        }
      }
    },
    scales: {
      x: {
        display: true
      },
      y: {
        display: true,
        text: "ppm"
      }
    }
  };


  return data && <div className={styles.image1Icon}><Line options={options} data={data} /></div>
  // <img className={styles.image1Icon} alt="" src="https://github.com/NavSous/Software-Studio-Project/blob/data/images/co2_30.png?raw=true" />;

  // <div> asdfkajsdlkfjalksjdfkljasdf </div>
  // return (data != null)? <div> hii </div> : <div> no data </div>
  
  
};

export default ImagePlot;
