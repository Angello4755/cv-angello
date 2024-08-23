import React, { FC, ReactElement, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Language, languageDictionary } from "../../../data/language";
import { LanguageContext } from "./LanguageContex";
import { LanguageReducer } from "./LanguageReducer";
import { RepositoryFirebase } from "../../../infraestructure/repositoryFirebase";
import { Repository} from "../../../domain/repository";

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

  useEffect(() => {
    const fetchData = async () => {
      const repository: Repository = new RepositoryFirebase();
      console.log("repository");
      await repository.save();
      console.log("fin repo");
    };
  
    fetchData();
  }, []);

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


