import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setLoading(true);
    setResultData("");
    const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    loading,
    onSent,
    resultData,
    input,
    setInput,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider; // Default export

