import React from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import { cva, VariantProps } from 'class-variance-authority';

const selectVariants = cva(
  'rounded-md border border-input bg-background text-sm ring-offset-background',
  {
    variants: {
      variant: {
        default: 'focus:ring-2 focus:ring-ring focus:ring-offset-2',
        error: 'border-error-300 focus:ring-error-300',
      },
      size: {
        default: 'h-10',
        sm: 'h-9 text-xs',
        lg: 'h-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface SelectProps
  extends AntSelectProps,
    VariantProps<typeof selectVariants> {}

const Select: React.FC<SelectProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <AntSelect
      className={selectVariants({ variant, size, className })}
      {...props}
    />
  );
};

export default Select;