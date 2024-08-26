import React from "react";
import { Table as AntTable } from "antd";
import type { TableProps as AntTableProps } from "antd";
import { theme } from "@/theme";

export interface TableProps extends AntTableProps<any> {
  className?: string;
  checkbox?: boolean;
}

const Table: React.FC<TableProps> = ({ className, ...props }) => {
  return <AntTable {...props} bordered={false} className={className} />;
};

const TableWithSubComponents = Table as React.FC<TableProps> & {
  Summary: typeof AntTable.Summary;
};

TableWithSubComponents.Summary = AntTable.Summary;

export default TableWithSubComponents;