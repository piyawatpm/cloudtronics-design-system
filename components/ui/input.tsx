import React from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        error: "border-error-300 focus-visible:ring-error-300",
      },
      size: {
        default: "h-10",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface InputProps
  extends AntInputProps,
    VariantProps<typeof inputVariants> {}

const Input: React.FC<InputProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <AntInput
      className={inputVariants({ variant, size, className })}
      {...props}
    />
  );
};

export default Input;
