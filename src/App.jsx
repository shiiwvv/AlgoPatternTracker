import React, { useEffect, useState } from "react";
import "./App.css";
import { Home, NavBar, Pattern, Footer } from "./components";
import { Outlet } from "react-router-dom";
import { ProblemsContextProvider, useProblemContext } from "./context";

function App() {
  const [problems, setProblems] = useState([]);

  const addProblem = (problemObj) => {
    setProblems((oldProb) => [...oldProb, problemObj]);
  };

  const markComplete = (id) => {
    setProblems((oldProb) =>
      oldProb.map((Prob) =>
        Prob.id === id ? { ...Prob, completed: !Prob.completed } : Prob,
      ),
    );
  };

  const deleteProblem = (id) => {
    setProblems((oldProb) => oldProb.filter((Prob) => Prob.id !== id));
  };

  //Adding LocalStorage Functionality.
  useEffect(() => {
    const localProblemList = JSON.parse(localStorage.getItem("ProbList"));

    if (localProblemList && localProblemList.length > 0) {
      setProblems(localProblemList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ProbList", JSON.stringify(problems));
  }, [problems]);

  return (
    <>
      <ProblemsContextProvider
        value={{ problems, addProblem, markComplete, deleteProblem }}
      >
        <NavBar />
        <Outlet />
        <Footer />
      </ProblemsContextProvider>
    </>
  );
}

export default App;
