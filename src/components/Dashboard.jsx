import Header from "./Header";

function Dashboard({ userData }) {
  return (
    <div>
      <Header />
      <div className="border-2 border-slate-600 w-[350px]">
        <img
          className="w-[150px] rounded-full mx-auto my-3 h-[150px]"
          src={userData.imageUrl}
          alt={userData.firstName}
        />

        <div className="p-5">
          <h1 className="text-3xl font-bold text-center">
            {userData.firstName} {userData.lastName}
          </h1>

          <h4 className="text-center font-bold">{userData.identifier}</h4>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
