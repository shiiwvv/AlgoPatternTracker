import { useContext , createContext } from "react";

export const ProblemsContext = createContext({
    problems : [],
    
    addProblem : (problemObj) => {},
    markComplete : (id) => {},
    deleteProblem : (id) => {},
    
});

export const ProblemsContextProvider = ProblemsContext.Provider;

export const useProblemContext = () => {
    return useContext(ProblemsContext);
}