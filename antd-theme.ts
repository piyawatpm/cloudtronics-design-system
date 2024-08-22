// antd-theme.ts
import { theme } from "./theme.js";
import type { ThemeConfig } from "antd";

const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: theme.colors.primary,
    // colorSuccess: '#A4F4E7',
    // colorWarning: '#fc9331',
    // colorError: '#ff4747',
    // colorTextBase: '#1B1C1D',
    // fontFamily: 'Montserrat, sans-serif',
    // borderRadius: 4,
  },
  components: {
    Button: {
      // ... existing Button customizations
    },
    Input: {
      // These will apply to both Input and TextArea
      colorBgContainer: "var(--color-background)",
      colorBorder: "var(--color-input)",
      colorPrimaryHover: "var(--color-primary)",
      colorErrorBorder: "var(--color-error-300)",
    },
    Modal: {
      colorBgContainer: theme.colors.warning,
    },
  },
};

export default antdTheme;
