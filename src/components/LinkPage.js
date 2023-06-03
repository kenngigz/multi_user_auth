import { Link } from "react-router-dom";

const LinkPage = () => {
  return (
    <section>
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h1>Links</h1>
          <br />
          <h2 className="font-bold text-blue-600">Public</h2>
          <Link
            to="/login"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Login
          </Link>
          <br />
          <Link
            to="/register"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Register
          </Link>
          <br />
          <br />

          <h2 className="font-bold text-blue-600">Private</h2>
          <Link
            to="/"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Home
          </Link>
          <br />
          <Link
            to="/editor"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Editors Page
          </Link>
          <br />
          <Link
            to="/admin"
            className="underline decoration-sky-600 hover:decoration-blue-400"
          >
            Admin Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LinkPage;
