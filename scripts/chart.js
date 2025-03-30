const ctx = document.getElementById("analyticsChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 1",
        data: [13000, 15000, 4800, 12000, 14000, 13000, 20000],
        borderColor: "#4745A4",
        backgroundColor: "rgba(71, 69, 164, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Label 2",
        data: [5000, 8000, 6000, 12000, 4800, 4990, 11000],
        borderColor: "#F9BA33",
        backgroundColor: "rgba(249, 186, 51, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
        // text: "Analytics Weekly",
      },
      legend: {
        display: true,
        position:"top",
        labels: {
          padding: 10,
          usePointStyle: true,
        },
      },
    },
    scales: {
      y: {
        reverse: false,
        beginAtZero: true,
        afterBuildTicks: (axis) => {
          const ticks = [1000, 5000, 10000, 15000, 20000];
          return ticks.map((value) => ({ value }));
        },
        ticks: {
          callback: (value) => `${value / 1000}k`,
          autoSkip: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  },
});
