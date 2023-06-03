import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h1>Unauthorized</h1>
          <br />
          <p>You do not have access to the requested page.</p>
          <div className="flexGrow">
            <button
              onClick={goBack}
              className="bg-blue-500 w-full hover:shadow-blue-500/20 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unauthorized;
