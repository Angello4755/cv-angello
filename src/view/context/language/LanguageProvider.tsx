import React, { FC, ReactElement, useReducer } from "react";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();
  console.log("LanguageProvider", id, Language_INITIAL_STATE);
  if (id) {
    switch (id) {
      case "FR":
        Language_INITIAL_STATE.currentLanguage = languageDictionary.FR;
        break;
      case "ES":
        Language_INITIAL_STATE.currentLanguage = languageDictionary.ES;
        break;
      case "EN":
        Language_INITIAL_STATE.currentLanguage = languageDictionary.EN;
        break;
      default:
        Language_INITIAL_STATE.currentLanguage = languageDictionary.ES;
    }
  }

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
