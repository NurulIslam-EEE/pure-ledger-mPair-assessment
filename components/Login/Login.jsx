"use client";
import { Button, Checkbox, Form, Input } from "antd";

import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const router = useRouter();
  const onFinish = async (values) => {
    const res = await axios.post(
      `https://pure-ledger.vercel.app/api/v1/user/login`,
      values
    );

    if (!res?.data?.success) {
      toast.error("Failed to login!", {
        position: "top-right",
        autoClose: 5000,
      });
    }

    console.log("Success:", res);
  };
  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen flex justify-center">
      <ToastContainer />
      <div className={styles.login_container}>
        <h3 className="title">Welcome to PureLedger</h3>{" "}
        <p className="sub_title mt-5">Please Login to continue</p>
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
            label="Employee ID"
            name="employeeId"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input style={{ height: "45px", borderRadius: "4px" }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password style={{ height: "45px", borderRadius: "4px" }} />
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
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className="sub_title text-center" style={{ textAlign: "center" }}>
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            style={{ color: " rgba(35, 151, 200, 1)", cursor: "pointer" }}
          >
            Register Now!
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
