import React from "react";

const Context = React.createContext({
  categories: [],
  category: null,
  changeCategory: (c) => {},
  question: null,
});

export default Context;
