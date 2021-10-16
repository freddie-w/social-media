import ITab from "@/types/ITab";
import { useState } from "react";

export const useTabControl = (initialTabs: ITab[]) => {
  const [tabs, setTabs] = useState(initialTabs);

  const toggleTab = (index: number) => {
    const resetCurrent = tabs.map((item: ITab) => ({
      ...item,
      current: false,
    }));
    resetCurrent[index].current = true;
    setTabs(resetCurrent);
  };

  const query = tabs.find((tab) => tab.current)?.query;

  return {
    tabs,
    toggleTab,
    query,
  };
};
