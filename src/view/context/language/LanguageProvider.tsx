import React, { FC, ReactElement, useReducer } from "react";
import { Language, languageDictionary } from "../../../data/language";
import { LanguageContext } from "./LanguageContex";
import { LanguageReducer } from "./LanguageReducer";

export interface LanguageState {
  currentLanguage: Language;
}

const Language_INITIAL_STATE: LanguageState = {
  currentLanguage: languageDictionary.ES,
};

interface Props {
  children: ReactElement;
}

export const LanguageProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(LanguageReducer, Language_INITIAL_STATE);

  const changeLanguage = (language: string) => {
    dispatch({
      type: "set current language",
      payload: languageDictionary[language],
    });
  };
  return (
    <LanguageContext.Provider value={{ ...state, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
