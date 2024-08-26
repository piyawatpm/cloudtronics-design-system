import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Table from './table';

const meta: Meta<typeof Table> = {
  title: 'Components/ui/table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const columns = [
  {
    title: 'Invoice',
    dataIndex: 'invoice',
    key: 'invoice',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    align: 'right' as const,
  },
];

const data = [
  {
    key: '1',
    invoice: 'INV001',
    status: 'Paid',
    method: 'Credit Card',
    amount: '$250.00',
  },
  {
    key: '2',
    invoice: 'INV002',
    status: 'Pending',
    method: 'PayPal',
    amount: '$150.00',
  },
  {
    key: '3',
    invoice: 'INV003',
    status: 'Unpaid',
    method: 'Bank Transfer',
    amount: '$350.00',
  },
  {
    key: '4',
    invoice: 'INV004',
    status: 'Paid',
    method: 'Credit Card',
    amount: '$450.00',
  },
  {
    key: '5',
    invoice: 'INV005',
    status: 'Paid',
    method: 'PayPal',
    amount: '$550.00',
  },
  {
    key: '6',
    invoice: 'INV006',
    status: 'Pending',
    method: 'Bank Transfer',
    amount: '$200.00',
  },
  {
    key: '7',
    invoice: 'INV007',
    status: 'Unpaid',
    method: 'Credit Card',
    amount: '$300.00',
  },
];

export const Default: Story = {
  args: {
    columns: columns,
    dataSource: data,
  },
};

export const WithFooter: Story = {
  args: {
    columns: columns,
    dataSource: data,
    footer: () => (
      <div style={{ fontWeight: 'bold', textAlign: 'right' }}>
        Total: $2,500.00
      </div>
    ),
  },
};

export const WithCaption: Story = {
  args: {
    columns: columns,
    dataSource: data,
    caption: 'A list of your recent invoices.',
  },
};