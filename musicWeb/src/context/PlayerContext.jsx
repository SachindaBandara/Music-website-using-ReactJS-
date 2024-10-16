import { createContext } from "react";

const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const contextValue = {};

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};
