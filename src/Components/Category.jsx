//Hooks
import { useContext } from "react";

//Context
import Context from "../context";

const Category = (props) => {
  const { changeCategory, category } = useContext(Context);

  return (
    <button
      onClick={() => {
        changeCategory(props.name);
      }}
      title={props.name}
      className={`rounded-full border-2 bg-white overflow-hidden flex flex-col items-center justify-center 
        opacity-50 ${
          props.name === category
            ? "opacity-100 border-green-700"
            : "opacity-40"
        }`}
    >
      <img
        src={require(`../Images/${props.name}.png`)}
        className="h-1/2 w-1/2"
        alt=""
      />
    </button>
  );
};

export default Category;
