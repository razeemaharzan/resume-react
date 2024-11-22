import React, { createContext, useContext, RefObject } from "react";

export const RefContext = createContext<RefObject<HTMLDivElement> | null>(null);

export const useRefContext = () => {
  const context = useContext(RefContext);
  if (!context) {
    throw new Error("useRefContext must be used within a RefProvider");
  }
  return context;
};