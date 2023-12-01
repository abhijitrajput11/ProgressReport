import { useLocation } from "react-router-dom";
import React from "react";
import Chart from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";

function NextPage() {
  const location = useLocation();
  const dataa = location.state;
  // console.log(dataa)
  const x = dataa.dataa[0]
  const total = x.DMT1 + x.DMT2 + x.DMT3 + x.FSD2T1 + x.FSD2T2 + x.FSD2T3 +
    x.COAT1 + x.COAT2 + x.COAT3 + x.TOCT1 + x.TOCT2 + x.TOCT3 + x.FCSP2T1 +
    x.FCSP2T2 + x.FCSP2T3 + x.DMT4 + x.COAT4 + x.FSD2T4 + x.FCSP2T4 + x.TOCT4

  const labels = ["DM", "COA", "TOC", "FCSP", "FSD"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "T1",
        data: [x.DMT1, x.COAT1, x.TOCT1, x.FCSP2T1, x.FSD2T1],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        lineTension: 0.1
      },
      {
        label: "T2",
        data: [x.DMT2, x.COAT2, x.TOCT2, x.FCSP2T2, x.FSD2T2],
        fill: false,
        borderColor: "rgba(255,99,132,1)",
        lineTension: 0.1
      },
      {
        label: "T3",
        data: [x.DMT3, x.COAT3, x.TOCT3, x.FCSP2T3, x.FSD2T3],
        fill: false,
        borderColor: "rgba(153, 102, 255, 1)",
        lineTension: 0.1
      },
      {
        label: "T4",
        data: [x.DMT4, x.COAT4, x.TOCT4, x.FCSP2T4, x.FSD2T4],
        fill: false,
        borderColor: "rgba(129, 245, 66)",
        lineTension: 0.1
      }
    ],
  };

  const bar = {
    labels: ['DMT1', 'COAT1', 'TOCT1', 'FCSPT1', 'FSDT1'],
    datasets: [
      {
        label: "T1",
        data: [x.DMT1, x.COAT1, x.TOCT1, x.FCSP2T1, x.FSD2T1],
        backgroundColor: [
          "rgba(235, 52, 52)",
          "rgba(6,6,212)",
          "rgba(6,212,30)",
          "rgba(202,6,212)",
          "rgba(85,12,138)"

        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",

        ],
        borderWidth: 1,
        fill: false,
        lineTension: 0.1
      }
    ]

  }


  const bar2 = {
    labels: ['DMT1', 'COAT1', 'TOCT1', 'FCSPT1', 'FSDT1'],
    datasets: [
      {
        label: "T2",
        data: [x.DMT2, x.COAT2, x.TOCT2, x.FCSP2T2, x.FSD2T2],
        backgroundColor: [
          "rgba(6,6,212)",                               
          "rgba(235, 52, 52)",
          "rgba(202,6,212)",
          "rgba(85,12,138)",
          "rgba(6,212,30)",
        ],
        borderColor: [
          "rgba(235, 52, 52,1)",
          "rgba(6,6,212,1)",
          "rgba(6,212,30,1)",
          "rgba(202,6,212,1)",
          "rgba(85,12,138,1)"
        ],
        borderWidth: 1,
        fill: false,
        lineTension: 0.1
      }
    ]

  }


  const bar3 = {
    labels: ['DMT3', 'COAT3', 'TOCT3', 'FCSPT3', 'FSDT3'],
    datasets: [
      {
        label: "T3",
        data: [x.DMT3, x.COAT3, x.TOCT3, x.FCSP2T3, x.FSD2T3],
        backgroundColor: [
          "rgba(6,212,30)",
          "rgba(235, 52, 52)",
          "rgba(6,6,212)",                                                                  
          "rgba(85,12,138)",
          "rgba(202,6,212)",
        ],
        borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)"
        ],
        borderWidth: 1,
        fill: false,
        lineTension: 0.1
      }
    ]

  }

  const bar4 = {
    labels: ['DMT3', 'COAT3', 'TOCT3', 'FCSPT3', 'FSDT3'],
    datasets: [
      {
        label: "T4",
        data: [x.DMT4, x.COAT4, x.TOCT4, x.FCSP2T4, x.FSD2T4],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(54, 162, 235)"
      ],
      borderColor: [
        "rgba(235, 52, 52,1)",
        "rgba(6,6,212,1)",
        "rgba(6,212,30,1)",
        "rgba(202,6,212,1)",
        "rgba(85,12,138,1)"
      ],
        borderWidth: 1,
        fill: false,
        lineTension: 0.1
      }
    ]

  }
  return (
    <>
      <div style={{ width: '100%', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

        <div style={{ width: '31%' }}><Line data={data} /></div>
        <div style={{ width: '31%' }}><Bar data={bar} /></div>
        <div style={{ width: '32%' }}><Bar data={bar2} /></div>

      </div>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '50px' }}>

        <div style={{ width: '31%' }}><Bar data={bar3} /></div>
        <div style={{ width: '31%' }}><Bar data={bar4} /></div>

        <div style={{ maxWidth: '30%' }}>
          <h4>Name:{x.STUDENTNAME}</h4>
          <h5>Total:{total}</h5>
          <h5>Rank:{x.RANK}</h5>
        </div>

      </div>

    </>

  );

}

export default NextPage;
