import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const buttonVariants = cva(
  " transition-all leading-[120%] inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90 text-white",
        destructive: "bg-error-300 hover:bg-error-100 text-white",
        outline: "border border-input hover:bg-neutral-100",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground bg-neutral-100",
        link: "underline-offset-4 hover:underline text-primary",
      },
      moreRounded: {
        true: "!rounded-m",
      },
      size: {
        default: " py-s px-m",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  loading?: boolean;
  moreRounded?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  className,
  size,
  icon,
  children,
  loading,
  variant,
  moreRounded,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({ variant, size, className, moreRounded })}
      disabled={loading}
      {...props}
    >
      {loading && (
        <Spin
          indicator={
            <LoadingOutlined
              className="!text-white mr-2 "
              style={{ fontSize: 16 }}
              spin
            />
          }
          size="small"
        />
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
