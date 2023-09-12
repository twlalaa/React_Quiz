//Hooks
import { useContext } from "react";

//Context
import Context from "../context";

const Answers = () => {
  const { variants } = useContext(Context);
  return (
    <div className="w-1/2 p-10 flex flex-col items-center justify-center">
      <ul>
        {variants.map((v) => {
          return (
            <li className="bg-white p-5 border-2 shadow-sm transition-all duration-200 cursor-pointer mb-2 rounded-2xl text-xl text-center hover:shadow-xl">
              {v.answer}
            </li>
          );
        })}
      </ul>
      <button className="bg-green-500 mt-5 w-1/2 text-xl text-white p-2 rounded-xl hover:scale-110 transition-all duration-200">
        Submit
      </button>
    </div>
  );
};

export default Answers;
