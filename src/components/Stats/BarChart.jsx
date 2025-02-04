import Chart from "react-apexcharts";

function BarChart({ darkMode }) {
  const chartConfig = {
    series: [
      {
        name: "Quantity",
        data: [25, 12,],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: darkMode ? "#dddddd" : "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: darkMode ? "#dddddd" : "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 350,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#a0a0a0",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return <div className="px-2 pb-0">
    <Chart options={chartConfig.options} series={chartConfig.series} type="bar" height={312}/>
  </div>;
}

export default BarChart;
