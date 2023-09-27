import { action, autorun, computed, makeObservable, observable, runInAction } from "mobx";

interface UserInfo {
  id: string;
  name: string;
  subject: string[];
}

interface SubjectInfo {
  name: string;
  id?: string;
  subject?: string[];
}

export default class UserStore {
  userInfo: UserInfo = {
    id: "113",
    name: "Happy Learnings",
    subject: ["English", "CS", "Maths"],
  };
  // NOTE: MakeObservable, autorun and runInAction are written in constructor
  constructor() {
    makeObservable(this, {
      userInfo: observable,
      totalSubject: computed,
      updateUser: action, // MOBX SHOULD KNOW - UPDATE STATE
      addSubject: action,
      removeSubject: action,
    });
    autorun(this.logUserDetails);
    runInAction(this.prefetchData);
  }
  get totalSubject() {
    console.log(`getter`);
    return this.userInfo.subject.length;
  }
  logUserDetails = () => {
    console.log(`Subject length: ${this.totalSubject}, Name: ${this.userInfo.name}`);
  };
  updateUser = (name: string) => {
    this.userInfo.name = name;
  };
  addSubject = (data: string) => {
    this.userInfo.subject.push(data);
  };
  removeSubject = (name: string) => {
    const index = this.userInfo.subject.findIndex((sub) => sub === name);
    this.userInfo.subject.splice(index, 1);
  };
  prefetchData = () => {
    console.log("run in action...");
  };
}
