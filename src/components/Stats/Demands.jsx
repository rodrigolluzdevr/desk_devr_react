import { FiSend } from "react-icons/fi";
import Title from "../../ui/Title";
import BarChart from "./BarChart";

const Demands = ({ darkMode }) => {
  return (
    <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1">
      <div className="flex justify-between items-center">
        <Title>Completed demands</Title>
        <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 w-8 h-8" />
      </div>
      <div>
        <h1 className="font-bold text-2xl">
          12 <span className="font-medium text-xl"></span>
        </h1>
        <span>February 2025</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Demands;
