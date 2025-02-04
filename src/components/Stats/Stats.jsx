import { empolyeesData } from "../../constants";
import Demands from "./Demands";
import Card from "./Card";

const Stats = ({ darkMode }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-6 h-full">
        {empolyeesData.map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
      <Demands darkMode={darkMode}/>
    </div>
  );
};

export default Stats;
