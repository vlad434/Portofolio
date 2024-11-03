"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContext({
  children,
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveContext.Provider
      value={{
        activeSection: activeSection,
        setActiveSection: setActiveSection,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveContext);

  if (context === null) {
    throw new Error();
  }

  return context;
}
