import { Language } from "../../../data/language";
import { LanguageState } from "./LanguageProvider";

type LanguageActionType = {
  type: "set current language";
  payload: Language;
};

export const LanguageReducer = (
  state: LanguageState,
  action: LanguageActionType
): LanguageState => {
  switch (action.type) {
    case "set current language":
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};
