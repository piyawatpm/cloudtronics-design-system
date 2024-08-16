import "./preview.css";
import type { Preview } from "@storybook/react";
import { ConfigProvider } from "antd";
import theme from "../antd-theme";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider theme={theme}>
        <Story />
      </ConfigProvider>
    ),
  ],
 
};

export default preview;
