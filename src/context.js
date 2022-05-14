import { createContext, useState } from "react";

export const Counter = createContext();

const Context = ({children}) => {
    const [count,setCount] = useState(0);
    return <Counter.Provider value={{count,setCount}}>{children}</Counter.Provider>
}

export default Context

