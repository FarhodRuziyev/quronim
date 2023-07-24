import { createContext, useState } from "react";

export const ObyektContext = createContext();

export function ObyektProvider({ children } ) {
  const [dat, setDat] = useState(null);
  const [neme, setNeme] = useState(0);
  return (
    <ObyektContext.Provider value={{ dat, setDat, neme, setNeme }}>
      {children}
    </ObyektContext.Provider>
  );
}

// export function ObyektProvider({ children }) {
//   const [date, setData] = useState(null);
//   const [neme, setNeme] = useState(0);
//   return (
//     <ObyektContext.Provider value={{ date, setData, neme, setNeme }}>
//       {children}
//     </ObyektContext.Provider>
//   );
// }