const chartData = {
  daily: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Label 1",
        data: [100, 20, 130, 300, 500, 160, 710],
        borderColor: "#4745A4",
        backgroundColor: "rgba(71, 69, 164, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Label 2",
        data: [340, 100, 500, 400, 150, 380, 280],
        borderColor: "#F9BA33",
        backgroundColor: "rgba(249, 186, 51, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
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
  monthly: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Label 1",
        data: [32000, 12000, 32000, 43000, 51000, 10000],
        borderColor: "#4745A4",
        backgroundColor: "rgba(71, 69, 164, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Label 2",
        data: [10000, 31000, 34000, 15000, 65000, 71000],
        borderColor: "#F9BA33",
        backgroundColor: "rgba(249, 186, 51, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  yearly: {
    labels: ["2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Label 1",
        data: [220000, 170000, 130000, 240000],
        borderColor: "#4745A4",
        backgroundColor: "rgba(71, 69, 164, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Label 2",
        data: [130000, 40000, 32000, 50000],
        borderColor: "#F9BA33",
        backgroundColor: "rgba(249, 186, 51, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
};
