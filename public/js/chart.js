const ctx = document.getElementById("chart").getContext("2d");

const ticker = document.getElementById("ticker-symbol").textContent;

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

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: axisdata.x,
        datasets: [
          {
            data: axisdata.y,
          },
        ],
      },
      options: {
        //   onClick: (e) => {
        //     const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
        //     const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
        //     const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        //   },
      },
    });
  } catch (err) {
    console.log(err);
  }
};

getChart();
