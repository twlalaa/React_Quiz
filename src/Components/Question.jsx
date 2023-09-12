//Hooks
import { useContext } from "react";

//Context
import Context from "../context";

const Question = () => {
  const { category, question } = useContext(Context);
  return (
    <div className="w-1/2 h-[640px] p-10 flex items-center justify-center flex-col">
      <h1 className="text-2xl  font-medium mb-5">Question 1 of 10</h1>
      <div className="h-[300px] mb-5">
        <img
          className="h-full "
          src={require(`../Images/${category ? category : "Movies"}.png`)}
          alt=""
        />
      </div>
      <h1 className="text-[30px] font-medium text-center">{question.question}</h1>
    </div>
  );
};

export default Question;
