import React from "react";
import { Select as AntSelect, SelectProps as AntSelectProps, Tag } from "antd";
import { CheckOutlined } from "@ant-design/icons";
export interface OptionType {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface OptionGroupType {
  label: React.ReactNode;
  title: string;
  options: OptionType[];
}

export interface CustomSelectProps<T = any>
  extends Omit<AntSelectProps<T>, "children"> {
  className?: string;
  options?: (OptionType | OptionGroupType)[];
}

function Select({ className, options, value, ...props }: CustomSelectProps) {
  // const tagRender = (props: any) => {
  //   const { label, value, closable, onClose } = props;
  //   return (
  //     <Tag
  //       color="default"
  //       closable={closable}
  //       onClose={onClose}
  //       // style={{ marginRight: 3 }}
  //     >
  //       {label}
  //     </Tag>
  //   );
  // };

  return (
    <AntSelect
      style={{ width: 300 }}
      // open
      // mode="multiple"
      className={className}
      popupClassName="border-[1px] border-neutrals-200 !shadow-base"
      // tagRender={tagRender}
      {...props}
      menuItemSelectedIcon={<CheckOutlined />}
    >
      {options?.map((option, index) => {
        if ("options" in option) {
          // This is an OptionGroupType
          return (
            <AntSelect.OptGroup
              key={option.title || index}
              className="!text-[14px] !font-semibold !text-neutrals-900 !pl-l"
              label={option.label}
            >
              {option.options.map((subOption) => (
                <AntSelect.Option
                  key={subOption.value}
                  value={subOption.value}
                  disabled={subOption.disabled}
                  className="!px-s !py-xs"
                >
                  <div className="flex items-center gap-x-2 h-full">
                    <p>{subOption.label}</p>
                  </div>
                </AntSelect.Option>
              ))}
            </AntSelect.OptGroup>
          );
        } else {
          // This is a normal OptionType
          return (
            <AntSelect.Option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="!px-s !py-xs"
            >
              <div className="flex items-center gap-x-2 h-full">
                <p>{option.label}</p>
              </div>
            </AntSelect.Option>
          );
        }
      })}
    </AntSelect>
  );
}

export default Select;
