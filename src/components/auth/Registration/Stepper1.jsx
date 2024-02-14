/* eslint-disable react/jsx-key */
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

import { Button, Checkbox, Form, Input } from 'antd';
import { TextField } from '@mui/material';
import FarmerInformation from './farmer-information/farmer-information';
import Institution from './institution';
import Cooperative from './Cooperative';
import Agriculture from './Agriculture';
import Livestock from './Livestock';
import Fisheries from './Fisheries';
import SpecialNote from './special-note/index';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState({
    activeStep: 0,
    title: 'খামারির বিবরণ',
  });
  console.log('🚀 ~ activeStep:', activeStep);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleTitle = (path) => {
    console.log('🚀 ~ handleTitle ~ path:', typeof path);
    switch (path) {
      case 0:
        return 'খামারির বিবরণ';

      case 1:
        return 'প্রক্তিষ্ঠানে বিবরণ';

      case 2:
        return 'সমবায় বিবরণ';

      case 3:
        return 'খামারির বিবরণ (কৃষি)';

      case 4:
        return 'খামারির বিবরণ (প্রাণিসম্পদ)';

      case 5:
        return 'খামারির বিবরণ (মৎস্য)';

      default:
        return 'খামারির বিবরণ';
    }
  };
  const maxSteps = 7;
  const steps = [
    <FarmerInformation
      setStep={[activeStep, setActiveStep]}
      maxSteps={maxSteps}
    />,
    <Institution setStep={[activeStep, setActiveStep]} maxSteps={maxSteps} />,
    <Cooperative setStep={[activeStep, setActiveStep]} maxSteps={maxSteps} />,
    <Agriculture setStep={[activeStep, setActiveStep]} maxSteps={maxSteps} />,
    <Livestock setStep={[activeStep, setActiveStep]} maxSteps={maxSteps} />,
    <Fisheries setStep={[activeStep, setActiveStep]} maxSteps={maxSteps} />,
    <SpecialNote setStep={[activeStep, setActiveStep]} maxSteps={maxSteps} />,
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <p className="mb-4 ml-1 font-semibold">
        {handleTitle(activeStep.activeStep)}
      </p>
      <Stepper activeStep={activeStep.activeStep}>
        {steps.map((label, index) => {
          // console.log('🚀 ~ {steps.map ~ label:', label);
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {steps[activeStep.activeStep]}
      {/* {activeStep.activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
         
          {steps[activeStep.activeStep]}
        </React.Fragment>
      )} */}
    </Box>
  );
}
