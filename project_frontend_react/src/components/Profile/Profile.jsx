import DonutChart from "./DonutChart";
import ShortCuts from "./ShortCuts";
import User from "./User";

const Profile = () => {
  return (
    <div className="rounded-2xl w-full lg:w-60 xl:w-80 flex flex-col justify-start gap-4">
      
      <div><User /></div>
      <div><ShortCuts /></div>
      <div className=""><DonutChart /></div>
    </div>
  );
};

export default Profile;
