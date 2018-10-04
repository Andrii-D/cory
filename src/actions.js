import {SET_LANGUAGES, SET_SCALE, SET_SCREENS, SET_URL} from "./action-types"
export const setLanguages = languages => ({ type: SET_LANGUAGES, payload: languages });
export const setScreens = screens => ({ type: SET_SCREENS, payload: screens });
export const setUrl = url => ({ type: SET_URL, payload: url });
export const setScale = scale => ({ type: SET_SCALE, payload: scale });