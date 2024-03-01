import { Link } from "react-router-dom";

import { toast } from "sonner";

const handleButtonClick = () => {
  window.location.reload();
  toast.warning("Tüm Kilitleri açmaya Hazır mısın");
};

const Home = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center mt-32">
      <div className=" p-16">
        <button onClick={handleButtonClick}>
          <Link to="/login">
            <span
              className="material-symbols-outlined   "
              style={{ color: "red", fontSize: 250 }}
            >
              lock
            </span>
          </Link>
        </button>
      </div>
      <div className="text-white p-16 w-[50%]  ">
        <button onClick={handleButtonClick}>
          <Link to="/login">
            <label
              htmlFor=""
              className="text-8xl font-extralight justify-center items-center  "
            >
              Hayatınızdaki Tüm Kilitleri Açın...
            </label>
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Home;
