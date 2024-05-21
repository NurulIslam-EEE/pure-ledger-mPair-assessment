"use client";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import AccountModal from "../../../../components/Dashboard/AccountModal";
import { useState } from "react";

function Accounting() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ background: "white" }}>
      <AccountModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div>
        <div className="accounting_container">
          <div className="flex">
            <div>
              <h3>Add Accounting</h3>
              <Form
                layout="vertical"
                className="mt-5"
                name="basic"
                labelCol={{
                  span: 32,
                }}
                wrapperCol={{
                  span: 32,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item>
                  <DatePicker
                    placeholder="Choose Date"
                    style={{
                      height: "45px",
                      borderRadius: "4px",
                      width: "248px",
                    }}
                  />
                </Form.Item>
                {/*  */}
                <div>
                  <button
                    className="input_style mb-5"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Account Type{" "}
                    <span>
                      <DownOutlined />
                    </span>
                  </button>
                </div>

                {/*  */}
                <Form.Item>
                  <Select
                    placeholder="Choose Head"
                    style={{ height: "45px", borderRadius: "4px" }}
                  >
                    <Select.Option value="male">Transportation</Select.Option>
                    <Select.Option value="Female">
                      Office maintenance
                    </Select.Option>
                    <Select.Option value="others">Courier cost</Select.Option>
                    <Select.Option value="others">Stationary</Select.Option>
                    <Select.Option value="Food">Others</Select.Option>
                  </Select>
                </Form.Item>
                {/*  */}

                {/*  */}

                {/*  */}
                <Form.Item
                  name="position"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Name!",
                    },
                  ]}
                >
                  <Input
                    style={{ height: "45px", borderRadius: "4px" }}
                    placeholder="Amount"
                    type="number"
                  />
                </Form.Item>
                {/*  */}

                <Form.Item
                  wrapperCol={{
                    offset: 0,
                    span: 32,
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                      background: "rgba(35, 151, 200, 1)",
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div>
              <h3>Account Heads</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounting;
