import React from "react";
import { Form, Input, Button } from "antd";
import "./AuthFormStyle.scss";
import AuthBtn from "./AuthBtn";
import FaceBookIcon from "../../Icons/FaceBookIcon";
import AppleIcon from "../../Icons/AppleIcon";
import GoogleIcon from "../../Icons/GoogleIcon";
import { AUTH_TYPE } from "../../Config";
import { useNavigate } from "react-router-dom";
import { routesList } from "../../Config/routers";
function AuthForm({ type }) {
  const navigate = useNavigate()
  const onFinish = () => {
    navigate(routesList?.home?.pathname)
  };
  const onFinishFailed = () => {};
  return (
    <div className="auth-form">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        {type === AUTH_TYPE?.SIGNUP && (
          <Form.Item
            className="auth-form-title"
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Anne Carry" />
          </Form.Item>
        )}

        <Form.Item
          className="auth-form-title"
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="email" placeholder="anne.carry@mail.com" />
        </Form.Item>

        <Form.Item
          className="auth-form-title"
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        {type === AUTH_TYPE?.LOGIN && (
          <p className="forgotPassword">Forgot Password?</p>
        )}

        <AuthBtn
          btnName={type===AUTH_TYPE?.SIGNUP ? "Create an account" : "Login"}
          btnType="black"
          classname="defaultAuthBtn"
          actionType="submit"
        />
        <p className="otherAuthPlatform">Or connect with socials</p>
        <AuthBtn
          btnName={"Connect with Facebook"}
          btnType="black"
          classname="defaultAuthBtn facebookBtn"
          icon={<FaceBookIcon />}
        />
        <AuthBtn
          btnName={"Connect with Apple"}
          btnType="black"
          classname="defaultAuthBtn appleBtn"
          icon={<AppleIcon />}
        />
        <AuthBtn
          btnName={"Connect with Google+"}
          btnType="default"
          classname="defaultAuthBtn googleBtn"
          icon={<GoogleIcon />}
        />
      </Form>
    </div>
  );
}

export default AuthForm;
