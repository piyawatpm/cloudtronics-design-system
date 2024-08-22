import React from "react";
import { Input } from "antd";
import { TextAreaProps as AntTextAreaProps } from "antd/es/input";
import { cva, VariantProps } from "class-variance-authority";

const { TextArea: AntTextArea } = Input;

const textAreaVariants = cva(
  "rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2",
        error: "border-error-300 focus-visible:ring-error-300",
      },
      size: {
        default: "min-h-[80px]",
        sm: "min-h-[60px] px-2 py-1 text-xs",
        lg: "min-h-[120px] px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TextAreaProps
  extends AntTextAreaProps,
    VariantProps<typeof textAreaVariants> {}

const TextArea: React.FC<TextAreaProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <AntTextArea
      className={textAreaVariants({ variant, size, className })}
      {...props}
    />
  );
};

export default TextArea;
