import themeStore from "../store/themeStore";

export interface Colors {
  purple: string;
  semiPurple: string;
  minPurple: string;
  black: string;
  semiBlack: string;
  classNumBlack: string;
  textCardBlack: string;
  inputBlack: string;
  submitInputColor: string;
  gray: string;
  topTabsTabBarGray: string;
  white: string;
  semiWhite: string;
  activeClassNum: string;
  topTabsWhite: string;
  classNumTextColor: string;
  bottomSheetInputColor: string;
  sectionDay: string;
  sectionDate: string;
  textButtonColor?: string;
  newsCardTitle?: string;
}
const useColors = () => {
  const { theme } = themeStore;

  return theme === "dark"
    ? {
        purple: "#5465FF",
        semiPurple: "rgba(84, 101, 255, 0.9)",
        minPurple: "rgba(84, 101, 255, 0.1)",
        black: "#131418",
        semiBlack: "#1B1D24",
        classNumBlack: "rgba(33, 37, 37, 0.9)",
        textCardBlack: "#212525",
        inputBlack: "#292C34",
        submitInputColor: "#A0A0A0",
        gray: "#BCC1CD",
        topTabsTabBarGray: "#C6C0C0",
        white: "#FFFFFF",
        semiWhite: "rgba(255, 255, 255, 0.6)",
        activeClassNum: "#D9D9D9",
        topTabsWhite: "#FFFFFF",
        classNumTextColor: "#FFFFFF",
        newsCardTitle: "#1B1D24",
        textButtonColor: "#FFFFFF",
        bottomSheetInputColor: "#25272F",
        sectionDay: "#BCC1CD",
        sectionDate: "#BCC1CD",
      }
    : {
        purple: "#5465FF",
        semiPurple: "rgba(84, 101, 255, 0.9)",
        minPurple: "rgba(84, 101, 255, 0.1)",
        black: "#EDF2FF",
        semiBlack: "#E0E5F1",
        classNumBlack: "rgba(33, 37, 37, 0.9)",
        textCardBlack: "#212525",
        inputBlack: "#BCC1CD",
        submitInputColor: "#5F5F5F",
        gray: "#BCC1CD",
        topTabsTabBarGray: "#3F3E3E",
        white: "#000000",
        semiWhite: "rgba(0, 0, 0, 0.6)",
        activeClassNum: "#D9D9D9",
        topTabsWhite: "#FFFFFF",
        classNumTextColor: "#FFFFFF",
        bottomSheetInputColor: "#CFD5E1",
        sectionDay: "black",
        sectionDate: "#9196A0",
      };
};

export default useColors;
