import React, { createContext } from "react";
export const SampleContext = createContext();
const SampleContextProvider = (props) => {
  const counter = 3;
  return (
    <SampleContext.Provider
      value={{
        counter,
      }}
    >
      {props.children}
    </SampleContext.Provider>
  );
};
export default SampleContextProvider;
