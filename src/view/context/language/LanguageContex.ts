import { createContext } from "react";
import { Language } from "../../../data/language";

interface ContextProps {
  changeLanguage: (language: string) => void;
  currentLanguage: Language;
}

export const LanguageContext = createContext({} as ContextProps);