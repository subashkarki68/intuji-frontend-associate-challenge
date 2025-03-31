const ctx = document.getElementById("analyticsChart");
const chartTypeSelect = document.getElementById("chart-type-select");

let chart = null;
const getChartData = (chartType) => {
  switch (chartType) {
    case "daily":
      return chartData.daily;
    case "weekly":
      return chartData.weekly;
    case "monthly":
      return chartData.monthly;
    default:
      return chartData.yearly;
  }
};

updateChart(chartTypeSelect.value);
chartTypeSelect.addEventListener("change", (e) => {
  // const currentChartType = e.target.value;
  updateChart(chartTypeSelect.value);
});

function updateChart(chartType) {
  if (chart) {
    chart.destroy();
  }

  const chartData = getChartData(chartType);
  chart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: true,
          position: "top",
          labels: {
            padding: 10,
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          grid: {
            drawOnChartArea: false,
          },
        },
        y: {
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    },
  });
}
