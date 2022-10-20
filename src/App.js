import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [authGoogle, setAuthGoogle] = useState(false);
  const [data, setData] = useState(null);
  return (
    <div className="flex justify-center items-center flex-col p-5 h-screen bg-slate-500">
      {!authGoogle ? (
        <Login authGoogle={setAuthGoogle} data={setData} />
      ) : (
        <div className="flex bg-slate-300 rounded border-slate-300 border-4  shadow-md shadow-slate-700">
          <img
            className="rounded"
            alt="profile image"
            src={data.user.photoURL}
          />
          <div className="py-2 px-4 text-center">
            <h3 className="text-4xl mb-1">{data.user.displayName}</h3>
            <p>{data.user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
