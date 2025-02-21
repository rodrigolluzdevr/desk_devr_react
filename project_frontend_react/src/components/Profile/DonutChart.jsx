import Chart from "react-apexcharts";
import Title from "../../ui/Title";

const DonutChart = ({ darkMode }) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        height: 300,
      },
      labels: ["Costumer Sucess", "Development", "Support"],
      colors: ["#6A329F", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="py-8 bg-white rounded-2xl p-5 flex flex-col dark:bg-gray-600 items-start justify-start">
      <div>
        <Title>Demands</Title>
      </div>
      <div>
        <Chart
          options={options.options}
          series={options.series}
          type="donut"
          height={315}
        />
      </div>
    </div>
  );
};

export default DonutChart;
