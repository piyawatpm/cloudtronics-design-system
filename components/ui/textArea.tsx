import React from "react";
import { Input } from "antd";
import { TextAreaProps as AntTextAreaProps } from "antd/es/input";
import { cva, VariantProps } from "class-variance-authority";

const { TextArea: AntTextArea } = Input;

export interface TextAreaProps extends AntTextAreaProps {
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <AntTextArea
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2"
      {...props}
    />
  );
};

export default TextArea;
