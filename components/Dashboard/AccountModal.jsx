import React, { useState } from "react";
import { Button, Modal, Radio } from "antd";
const AccountModal = ({ isModalOpen, setIsModalOpen }) => {
  const [value, setValue] = useState("debit");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"debit"}>Debit</Radio>
          <Radio value={"credit"}>Credit</Radio>
        </Radio.Group>
      </Modal>
    </>
  );
};
export default AccountModal;
