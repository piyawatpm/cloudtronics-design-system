// antd-theme.ts
import { theme } from "./theme.js";
import type { ThemeConfig } from "antd";
console.log("theme = ", theme);
const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: theme.colors.primary,
    fontFamily: "Montserrat, sans-serif",
    colorBgElevated: theme.colors["base-white"],
    // colorSuccess: '#A4F4E7',
    // colorWarning: '#fc9331',
    // colorError: '#ff4747',
    // colorTextBase: '#1B1C1D',
    // fontFamily: 'Montserrat, sans-serif',
    // borderRadius: 4,
    boxShadow: theme.shadow.base,
    colorBorder: theme.colors["neutrals-200"],

    colorBorderSecondary: theme.colors["neutrals-200"],
  },
  components: {
    Button: {
      // ... existing Button customizations
    },
    Input: {
      // These will apply to both Input and TextArea
    },
    Modal: {
      colorBgContainer: theme.colors.warning,
      contentBg: theme.colors["base-white"],
      headerBg: theme.colors["base-white"],
    },
    Select: {
      selectorBg: theme.colors["base-white"],
      borderRadius: 10,
      colorBorder: theme.colors["neutrals-200"],
      optionSelectedBg: theme.colors["neutrals-100"],
      optionSelectedColor: theme.colors["neutrals-900"],
      optionFontSize: 14,
      fontSize: 14,
      optionSelectedFontWeight: 400,
      // optionPadding: 1,
    },
  },
};

export default antdTheme;
