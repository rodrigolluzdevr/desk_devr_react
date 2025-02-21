import userLogo from "../../assets/rodrigouser.jpg";
const User = () => {
  return (
    <div className="flex gap-3 items-center bg-white p-4 rounded-2xl dark:bg-gray-600 dark:text-gray-300">
      <img src={userLogo} alt="user image" className="w-14 h-14 rounded-full" />
      <div>
        <h3 className="font-semibold text-2xl">Rodrigo Luz</h3>
        <p>Customer Success Analyst</p>
      </div>
    </div>
  );
};

export default User;
