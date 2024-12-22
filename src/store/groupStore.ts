import { makeAutoObservable } from "mobx";

class GroupStore {
  group = "";
  constructor() {
    makeAutoObservable(this);
  }
  setGroup = (value: string) => {
    this.group = value;
  };
}
export default new GroupStore();
