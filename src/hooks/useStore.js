import { create } from "zustand";
import { DARK } from "../enums/themeEnums";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('themeType');
  return savedTheme ? JSON.parse(savedTheme) : DARK;
};

export const useThemeStore = create((set) => ({
  themeType: getInitialTheme(),
  changeThemeType: (newThemeType) => {
    localStorage.setItem('themeType', JSON.stringify(newThemeType));
    set(() => ({ themeType: newThemeType }));
  }
}));