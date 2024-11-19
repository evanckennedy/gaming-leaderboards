function MiniLeaderboard() {
  return (
    <div className="transform transition-transform duration-300 ease-out hover:scale-105 cursor-pointer">
      <div className="bg-gradient-to-b from-primary-300 to-primary-400 relative flex items-center justify-center h-16 3xl:h-24 4xl:h-48">
        <p className="absolute top-0 right-0 m-1 4xl:m-3 text-white-200 font-light text-xs 3xl:text-lg 4xl:text-4xl">
          <span>Latest:</span>
          <span> 10/30/2024</span>
        </p>
        <h3 className="text-center text-white-100 font-black text-xl 3xl:text-3xl 4xl:text-6xl">
          Leaderboard Title
        </h3>
      </div>
      <div className="bg-primary-100 pb-4 3xl:pb-6 4xl:pb-12">
        <table className="text-white-100 w-full text-left text-sm 3xl:text-lg 4xl:text-4xl">
          <thead>
            <tr className="font-black">
              <th className="pl-3 py-2 3xl:pl-4 3xl:py-3 4xl:pl-9 4xl:py-6">
                Place
              </th>
              <th>Player</th>
              <th className="text-right pr-3 3xl:pr-4 4xl:pr-9">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-primary-200 even:bg-primary-100">
              <td className="pl-3 py-1 3xl:pl-4 3xl:py-2 4xl:pl-9 4xl:py-3">
                1.
              </td>
              <td>First Name Last Name</td>
              <td className="text-right pr-3 3xl:pr-4 4xl:pr-9">12</td>
            </tr>
            <tr className="odd:bg-primary-200 even:bg-primary-100">
              <td className="pl-3 py-1 3xl:pl-4 3xl:py-2 4xl:pl-9 4xl:py-3">
                2.
              </td>
              <td>First Name Last Name</td>
              <td className="text-right pr-3 3xl:pr-4 4xl:pr-9">11</td>
            </tr>
            <tr className="odd:bg-primary-200 even:bg-primary-100">
              <td className="pl-3 py-1 3xl:pl-4 3xl:py-2 4xl:pl-9 4xl:py-3">
                3.
              </td>
              <td>First Name Last Name</td>
              <td className="text-right pr-3 3xl:pr-4 4xl:pr-9">9</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MiniLeaderboard;
