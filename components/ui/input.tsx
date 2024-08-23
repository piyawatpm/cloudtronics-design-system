import React from "react";
import { Input as AntInput, InputProps as AntInputProps } from "antd";
import { TextAreaProps, SearchProps, PasswordProps } from "antd/es/input";
import Button from "./button";
const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-2";

export type InputProps = (AntInputProps | PasswordProps | SearchProps) & {
  className?: string;
  withButton?: boolean;
  disabled?: boolean;
};

const InputBase: React.FC<InputProps> = ({ className, disabled, ...props }) => {
  return (
    <div className={`flex gap-x-s items-center `}>
      <AntInput
        className={`${focusStyles} ${className} ${disabled ? "opacity-80" : ""}`}
        disabled={disabled}
        {...props}
      />
      {props.withButton && (
        <Button moreRounded className="!text-[.875rem]" disabled={disabled}>
          Subscribe
        </Button>
      )}
    </div>
  );
};

// Add TextArea component
const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <AntInput.TextArea className={`${focusStyles} ${className}`} {...props} />
  );
};

// Add Search component
const Search: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <AntInput.Search className={`${focusStyles} ${className}`} {...props} />
  );
};

// Add Password component
const Password: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <AntInput.Password className={`${focusStyles} ${className}`} {...props} />
  );
};
// Attach sub-components to Input
const InputWithSubComponents = InputBase as React.FC<InputProps> & {
  TextArea: typeof TextArea;
  Search: typeof Search;
  Password: typeof Password;
};

InputWithSubComponents.TextArea = TextArea;
InputWithSubComponents.Search = Search;
InputWithSubComponents.Password = Password;
const Input = Object.assign(InputBase, {
  TextArea,
  Search,
  Password,
});
export default Input;
