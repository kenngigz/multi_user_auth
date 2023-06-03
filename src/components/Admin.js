import { Link } from "react-router-dom";
import Users from "./Users";

const Admin = () => {
  return (
    <section>
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h1>Admins Page</h1>
          <br />
          <Users />
          <br />
          <div className="flexGrow">
            <Link
              to="/"
              className="underline decoration-sky-600 hover:decoration-blue-400"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
