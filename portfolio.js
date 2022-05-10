const ctx1 = document.getElementById("chart1").getContext("2d");
const ctx2 = document.getElementById("chart2").getContext("2d");
const ctx3 = document.getElementById("chart3").getContext("2d");

const chart1 = new Chart(ctx1, {
  type: "line",
  data: {
    datasets: [
      {
        data: [
          { x: "2022-05-05", y: 20 },
          { x: "2022-05-06", y: 10 },
          { x: "2022-05-07", y: 25 },
          { x: "2022-05-08", y: 15 },
          { x: "2022-05-09", y: 20 },
        ],
      },
    ],
  },
  options: {
    onClick: (e) => {
      const canvasPosition = Chart.helpers.getRelativePosition(e, chart1);

      const dataX = chart1.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart1.scales.y.getValueForPixel(canvasPosition.y);

      console.log(dataX);
      console.log(dataY);
    },
  },
});

const chart2 = new Chart(ctx2, {
  type: "line",
  data: {
    datasets: [
      {
        data: [
          { x: "2022-05-05", y: 20 },
          { x: "2022-05-06", y: 10 },
          { x: "2022-05-07", y: 25 },
          { x: "2022-05-08", y: 15 },
          { x: "2022-05-09", y: 20 },
        ],
      },
    ],
  },
  options: {
    onClick: (e) => {
      const canvasPosition = Chart.helpers.getRelativePosition(e, chart2);

      const dataX = chart2.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart2.scales.y.getValueForPixel(canvasPosition.y);

      console.log(dataX);
      console.log(dataY);
    },
  },
});

const chart3 = new Chart(ctx3, {
  type: "line",
  data: {
    datasets: [
      {
        data: [
          { x: "2022-05-05", y: 20 },
          { x: "2022-05-06", y: 10 },
          { x: "2022-05-07", y: 25 },
          { x: "2022-05-08", y: 15 },
          { x: "2022-05-09", y: 20 },
        ],
      },
    ],
  },
  options: {
    onClick: (e) => {
      const canvasPosition = Chart.helpers.getRelativePosition(e, chart3);

      const dataX = chart3.scales.x.getValueForPixel(canvasPosition.x);
      const dataY = chart3.scales.y.getValueForPixel(canvasPosition.y);

      console.log(dataX);
      console.log(dataY);
    },
  },
});
