import React from "react";
import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export interface SelectProps extends AntSelectProps {
  className?: string;
}

const Select: React.FC<SelectProps> = ({ className, ...props }) => {
  return (
    <AntSelect
      open
      className={className}
      {...props}
      menuItemSelectedIcon={null}
      optionRender={(option) => (
        <div>
          {/* {option.selected && <CheckOutlined style={{ marginRight: 8 }} />} */}
          {option.data.desc}
        </div>
      )}
    />
  );
};

export default Select;
