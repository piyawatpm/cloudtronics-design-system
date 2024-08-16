import React from 'react';
import { Modal } from 'antd';
import Button from './button';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  okText = 'OK',
  cancelText = 'Cancel',
  onOk,
}) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose} variant="outline">
          {cancelText}
        </Button>,
        <Button key="ok" onClick={onOk || onClose}>
          {okText}
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default Dialog;