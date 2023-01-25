import { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) {
    const [] = useState(null);
    return <GameContext.Provider value={{ }}>{children}</GameContext.Provider>;
};

export { GameProvider, GameContext };
