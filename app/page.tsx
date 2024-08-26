"use client";
import Image from "next/image";
import Button from "../components/ui/button";
import Navigation from "@/components/ui/navigation";
import Select from "@/components/ui/select";
import { useState } from "react";
import { notification } from "antd";
import { theme } from "../theme";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Space, Tag } from "antd";
import Table from "@/components/ui/table";
import Radio from "@/components/ui/radio";
// import Table from "@/components/ui/table";
// import  from "@/components/ui/radio";
import type { TableProps } from "antd";
export default function Home() {
  const options = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
  ];

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  // const columns: TableProps<DataType>["columns"] = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //     render: (text) => <a>{text}</a>,
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Tags",
  //     key: "tags",
  //     dataIndex: "tags",
  //     render: (_, { tags }) => (
  //       <>
  //         {tags.map((tag) => {
  //           let color = tag.length > 5 ? "geekblue" : "green";
  //           if (tag === "loser") {
  //             color = "volcano";
  //           }
  //           return (
  //             <Tag color={color} key={tag}>
  //               {tag.toUpperCase()}
  //             </Tag>
  //           );
  //         })}
  //       </>
  //     ),
  //   },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space size="middle">
  //         <a>Invite {record.name}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
  // ];

  // const data: DataType[] = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];

  const menuItems = [
    {
      label: "Main Menu Item1",
      href: "/",
    },
    {
      label: "Main Menu Item2",
      href: "/",
    },
    {
      label: "Main Menu Item3",
      href: "/",
    },

    {
      label: "Main Menu Item4",
      href: "/products",
      subMenu: [
        {
          label: "Electronics",
          href: "/products/electronics",
          thirdLevelMenu: [
            { label: "Phones", href: "/products/electronics/phones" },
            { label: "Laptops", href: "/products/electronics/laptops" },
          ],
        },
        {
          label: "Clothing",
          href: "/products/clothing",
          thirdLevelMenu: [
            { label: "Men", href: "/products/clothing/men" },
            { label: "Women", href: "/products/clothing/women" },
          ],
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
  ];
  // const options = [
  //   {
  //     label: <span>Frutis</span>,
  //     title: "Frutis",
  //     options: [
  //       { label: <span>Apple</span>, value: "Apple" },
  //       { label: <span>Banana</span>, value: "Banana" },
  //       { label: <span>Orange</span>, value: "Orange" },
  //       { label: <span>Mango</span>, value: "Mango" },
  //     ],
  //   },
  //   {
  //     label: <span>Vegetables</span>,
  //     title: "Vegetables",
  //     options: [
  //       { label: <span>Carrot</span>, value: "Carrot" },
  //       { label: <span>Broccoli</span>, value: "Broccoli" },
  //       { label: <span>Cucumber</span>, value: "Cucumber" },
  //       { label: <span>Lettuce</span>, value: "Lettuce" },
  //     ],
  //   },
  // ];

  const columns = [
    {
      title: "Invoice",
      dataIndex: "invoice",
      key: "invoice",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "right" as const,
    },
  ];

  const data = [
    {
      key: "1",
      invoice: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      key: "2",
      invoice: "INV002",
      status: "Pending",
      method: "PayPal",
      amount: "$150.00",
    },
    {
      key: "3",
      invoice: "INV003",
      status: "Unpaid",
      method: "Bank Transfer",
      amount: "$350.00",
    },
    {
      key: "4",
      invoice: "INV004",
      status: "Paid",
      method: "Credit Card",
      amount: "$450.00",
    },
    {
      key: "5",
      invoice: "INV005",
      status: "Paid",
      method: "PayPal",
      amount: "$550.00",
    },
    {
      key: "6",
      invoice: "INV006",
      status: "Pending",
      method: "Bank Transfer",
      amount: "$200.00",
    },
    {
      key: "7",
      invoice: "INV007",
      status: "Unpaid",
      method: "Credit Card",
      amount: "$300.00",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white  ">
      {/* <Navigation menuItems={menuItems} /> */}
      <Table
        bordered={false}
        columns={columns}
        dataSource={data}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, selectedRows) => {
            console.log(
              `selectedRowKeys: ${selectedRowKeys}`,
              `selectedRows: ${selectedRows}`
            );
          },
        }}
        summary={(pageData) => {
          return (
            <Table.Summary.Row className=" !font-bold">
              <Table.Summary.Cell colSpan={columns?.length} index={0}>
                Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                <p>$2,500.00</p>
              </Table.Summary.Cell>
            </Table.Summary.Row>
          );
        }}
      />
      {/* <Radio options={options} />
      <Select
        placeholder="Select an option"
        options={options}
        value={art}
        onChange={setArt}
      />
      <Button
      // onClick={() => {
      //   handleOpenNotification("error");
      // }}
      >
        Open the notification box
      </Button> */}
    </main>
  );
}
