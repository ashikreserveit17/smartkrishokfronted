'use client';

import React from 'react';
import { Space } from 'antd';
import MenuCreateAndStepper from './menuCreateAndStepper';
import StepperComponent from './Stepper1';

const Registration = () => {
  return (
    <div className="middle-container">
      <div className="register-form-box p-10 my-5  md:w-1/2 space-y-5">
        <Space className="mt-5 w-full" direction="vertical">
          <StepperComponent />
        </Space>
      </div>
    </div>
  );
};

export default Registration;
