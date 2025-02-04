const Card = ({ data }) => {
  return (
    <div className="bg-white p-8 rounded-2xl flex items-center gap-6 dark:bg-gray-600 dark:text-gray-400">
      <span className={`${data.bgColor} px-5 py-5 text-2xl rounded-2xl dark:bg-gray-500`}>
        <data.icon />
      </span>
      <div>
        <h2 className="text-xl">
          <span className="text-2xl font-bold">{data.count}</span>
        </h2>
        <p className="font-bold">{data.title}</p>

      </div>
    </div>
  );
};

export default Card;
