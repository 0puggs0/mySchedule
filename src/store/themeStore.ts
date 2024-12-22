import { makeAutoObservable } from "mobx";

class ThemeStore {
  theme = "dark";
  constructor() {
    makeAutoObservable(this);
  }
  setTheme = (value: string) => {
    this.theme = value;
  };
}
export default new ThemeStore();
