'use client';
import { Box, Button, MobileStepper } from '@mui/material';
import React from 'react';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default function FarmerInformation({ setStep, maxSteps }) {
  console.log('🚀 ~ FarmerInformation ~ setStep:', setStep);
  const [activeStep, setActiveStep] = setStep;
  // const maxSteps = 3;
  const handleBack = () => {
    setActiveStep((prevActiveStep) => ({
      ...prevActiveStep,
    }));
  };
  return (
    <div>
      <div className="my-10 ml-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
        obcaecati.
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Box>
        {/* <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button> */}
        <Box sx={{ flex: '1 1 auto' }} />

        <Button
          type="submit"
          variant="contained"
          sx={{
            '&.MuiButton-contained': {
              color: '#FFF',
              backgroundColor: '#009164',
              borderRadius: '60px',
            },
          }}
          onClick={() => {
            setActiveStep((prevActiveStep) => ({
              ...prevActiveStep,
              activeStep: prevActiveStep.activeStep + 1,
              data: 'data',
            }));
          }}
        >
          {activeStep.activeStep === maxSteps - 1
            ? 'Finish'
            : 'সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা'}
        </Button>
      </Box>
      {/* <MobileStepper
        sx={{
          '&.MuiMobileStepper-root': {
            background: 'rgb(247, 243, 243)',
          },
        }}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep.activeStep}
        nextButton={
          <Box className="p-3 ">
            <Button
              type="submit"
              variant="contained"
              sx={{
                '&.MuiButton-contained': {
                  color: '#FFF',
                  backgroundColor: '#009164',
                  borderRadius: '60px',
                },
              }}
              onClick={() => {
                setActiveStep((prevActiveStep) => ({
                  ...prevActiveStep,
                  activeStep: prevActiveStep.activeStep + 1,
                  data: 'data',
                }));
              }}
              disabled={activeStep.activeStep === maxSteps - 1}
            >
              সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা
            </Button>
          </Box>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep.activeStep === 0}
           
          >
           
            Back
          </Button>
        }
      /> */}
    </div>
  );
}