//Hooks
import { useContext } from "react";

//Context
import Context from "../context";

//React Router
import { Link, useHistory } from "react-router-dom";

const CTA = () => {
  const { category } = useContext(Context);
  const { replace } = useHistory();
  const startGame = () => {
    replace("/game");
  };

  return (
    <div className="w-1/2 flex items-center justify-center flex-col">
      <h1 className="text-[50px] font-caveat font-bold">Quizlet</h1>
      <p className="text-lg">Master the Art of Learning</p>
      <div className="h-20 my-2">
        <img
          src={require("../Images/Hero.png")}
          alt=""
          className="h-full w-full"
        />
      </div>

      <button
        onClick={startGame}
        className="bg-red-200 p-2 rounded-md hover:scale-110 transition-all duration-200"
      >
        Play
      </button>
      <p className="mt-2 text-sm ">
        {category && "Your category is:"}
        <span
          className={`font-bold ${
            category ? "text-green-500" : "text-red-500"
          } ml-1`}
        >
          {category ? category : "Please select a category"}
        </span>
      </p>
    </div>
  );
};

export default CTA;
