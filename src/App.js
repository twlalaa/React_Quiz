// Components
import Container from "./Components/Container";
import Header from "./Components/Header";
import Main from "./Components/Main";

//Hooks
import { useEffect, useContext, useState } from "react";

//React Router
import { Route, Switch } from "react-router-dom";

//Supabase
import supabase from "./supabase";

//Context
import Context from "./context";

// Pages
import Home from "./Pages/Home";
import Game from "./Pages/Game";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [variants, setVariants] = useState([]);
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  // const [variant, setVariant] = useState(null);
  const [index, setIndex] = useState(0);

  const getCategories = async (e) => {
    const { data, error } = await supabase.from("categories").select();

    if (error) {
      console.log(error);
    }

    if (data) {
      console.log(data);
      setCategories(data);
    }
  };

  const getQuestions = async (e) => {
    if (!category) return;
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .eq("category", category);

    if (error) console.log(error);

    if (data) {
      setQuestions(data);
      setQuestion(data[index]);
    }
  };

  const getVariants = async () => {
    if (!question) return;

    const { data, error } = await supabase
      .from("variants")
      .select("*")
      .eq("questionId", question.id);

    if (error) console.log(error);

    if (data) {
      console.log(data);
      setVariants(data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getQuestions();
  }, [category]);

  useEffect(() => {
    getVariants();
  }, [question]);

  const changeCategory = (c) => {
    if (category === c) {
      setCategory(null);
    } else {
      setCategory(c);
    }
  };

  return (
    <Container>
      <Context.Provider
        value={{
          category: category,
          categories: categories,
          changeCategory: changeCategory,
          question: question,
          variants: variants,
          index: index,
          setIndex: setIndex,
        }}
      >
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </Main>
      </Context.Provider>
    </Container>
  );
};

export default App;
