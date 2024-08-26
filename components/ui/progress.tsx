import React from "react";
import {
  Progress as AntProgress,
  ProgressProps as AntProgressProps,
} from "antd";
import { theme } from "@/theme";

export interface ProgressProps extends AntProgressProps {
  className?: string;
}

const Progress: React.FC<ProgressProps> = ({ className, ...props }) => {
  return (
    <AntProgress
      trailColor={theme.colors["neutrals-200"]}
      strokeColor={theme.colors.primary}
      className={`${className}`}
      {...props}
    />
  );
};

export default Progress;
