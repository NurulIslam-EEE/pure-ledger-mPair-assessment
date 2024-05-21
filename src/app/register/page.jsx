"use client";
import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const onFinish = async (values) => {
    const res = await axios.post(
      `https://pure-ledger.vercel.app/api/v1/user`,
      values
    );
    // console.log("Success:", res);
    if (!res?.data?.success) {
      toast.error("Failed to register!", {
        position: "top-right",
        autoClose: 5000,
      });
    }
    if (res?.data?.success) {
      toast.success("Successfully register!", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen flex justify-center">
      <ToastContainer />
      <div className="login_container">
        <h3 className="title">Welcome to PureLedger</h3>{" "}
        <p className="sub_title mt-5">Fill up the form to Register</p>
        <Form
          layout="vertical"
          className="mt-11"
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
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input
              style={{ height: "45px", borderRadius: "4px" }}
              placeholder="Full Name"
            />
          </Form.Item>

          {/*  */}
          <div className="flex justify-between">
            <Form.Item
              name="gender"
              style={{ width: "47%" }}
              rules={[
                {
                  required: true,
                  message: "Please input gender",
                },
              ]}
            >
              <Select
                placeholder="Gender"
                style={{ height: "45px", borderRadius: "4px" }}
              >
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="others">Others</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="dateOfBirth"
              style={{ width: "47%" }}
              rules={[
                {
                  required: true,
                  message: "Please input Date of birth!",
                },
              ]}
            >
              <DatePicker
                placeholder="Date of birth"
                style={{ height: "45px", borderRadius: "4px" }}
              />
            </Form.Item>
          </div>
          {/*  */}
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input
              style={{ height: "45px", borderRadius: "4px" }}
              placeholder="Email"
              type="email"
            />
          </Form.Item>

          {/*  */}
          <Form.Item
            name="employeeId"
            rules={[
              {
                required: true,
                message: "Please input your Full Name!",
              },
            ]}
          >
            <Input
              style={{ height: "45px", borderRadius: "4px" }}
              placeholder="Employee ID"
            />
          </Form.Item>
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
              placeholder="Position in Organization"
            />
          </Form.Item>
          {/*  */}
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              style={{ height: "45px", borderRadius: "4px" }}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 0,
              span: 32,
            }}
          >
            <Button
              style={{ width: "100%", background: "rgba(35, 151, 200, 1)" }}
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
