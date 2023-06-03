import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/linkpage");
  };

  return (
    <section>
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h1>Home</h1>
          <br />
          <p>You are logged in!</p>
          <br />
          <Link
            to="/editor"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Go to the Editor page
          </Link>
          <br />
          <Link
            to="/admin"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Go to the Admin page
          </Link>
          <br />
          <Link
            to="/lounge"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Go to the Lounge
          </Link>
          <br />
          <Link
            to="/linkpage"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Go to the link page
          </Link>
          <div className="bg-blue-500 w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
            <button onClick={signOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
