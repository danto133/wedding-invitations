import { createContext, useContext, useEffect, useState } from "react";
import { getGuestBySlug } from "../lib/getGuestBySlug";
import Guest from "@/interfaces/Guest";
import LayoutProps from "@/interfaces/LayoutProps";

interface appContext {
  guest?: Guest;
  setGuest: (guest: Guest) => void;
}
const appContext = createContext<appContext | null>(null);
export const AppContextProvider = ({ children }: LayoutProps) => {
  const [guest, setGuest] = useState<Guest | undefined>();
  useEffect(() => {
    if (localStorage) {
      const storageData = localStorage.getItem("wd_default_guest");
      const guest = getGuestBySlug(storageData || "");
      guest && setGuest(guest);
    }
  }, []);

  return (
    <appContext.Provider value={{ guest, setGuest }}>
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = (): appContext => {
  const context = useContext(appContext);
  if (!context) throw new Error("error");

  return context;
};
