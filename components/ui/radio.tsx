import React from "react";
import { Radio as AntRadio, RadioProps as AntRadioProps, Space } from "antd";
import { theme } from "@/theme";

export interface RadioProps extends AntRadioProps {
  className?: string;
  options?: { label: string; value: string; disabled?: boolean }[];

  direction?: "horizontal" | "vertical";
}

const Radio: React.FC<RadioProps> = ({
  className,
  children,
  options,
  direction = "horizontal",
  ...props
}) => {
  return (
    <AntRadio.Group
      className={` ${className}`}
      // style={{
      //   color: theme.colors.primary,
      // }}
    
      {...props}
     
    >
      <Space direction={direction}>
        {options?.map((option) => (
          <AntRadio
            checked={true}
            defaultChecked={true}
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.label} 22
          </AntRadio>
        ))}
      </Space>
      {/* {children} */}
    </AntRadio.Group>
  );
};

export default Radio;
