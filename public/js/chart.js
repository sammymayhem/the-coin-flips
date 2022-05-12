const ctx = document.getElementById("chart").getContext("2d");
const currentPrice = document.getElementById("current-price");
const ticker = document.getElementById("ticker-symbol").textContent;
const predictionPreview = document.getElementById("prediction-preview");

const validateClick = (x) => {
  return x > moment().format("x");
};

const getChart = async () => {
  try {
    const response = await fetch("/chart", {
      method: "POST",
      body: JSON.stringify({ ticker }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const axisdata = await response.json();

    currentPrice.textContent = axisdata.y[axisdata.y.length - 1];

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: axisdata.x,
        datasets: [
          {
            borderColor: "#00fff9",
            data: axisdata.y,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              displayFormats: {
                day: "MMM D",
              },
            },
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        onClick: (e) => {
          const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
          const clickX = Math.round(
            chart.scales.x.getValueForPixel(canvasPosition.x)
          );
          const clickY =
            Math.round(
              chart.scales.y.getValueForPixel(canvasPosition.y) * 100
            ) / 100;

          const validClick = validateClick(clickX);
          const predDate = moment(clickX, "x").format("MMM D");

          if (validClick) {
            predictionPreview.innerHTML = `<h6>Prediction:</br> ${ticker}:  $${clickY} @ ${predDate}</h6>`;
            console.log(clickX);
            console.log(clickY);
          }
        },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

getChart();
