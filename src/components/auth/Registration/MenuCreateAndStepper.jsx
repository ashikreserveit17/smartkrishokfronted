/* eslint-disable react/jsx-key */
'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Institution from './institution';
import FarmerInformation from './farmer-information/farmer-information';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function MenuCreateAndStepper() {
  const [activeStep, setActiveStep] = React.useState({
    activeStep: 0,
  });
  const [skipped, setSkipped] = React.useState(new Set());
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
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

  const steps = [
    <FarmerInformation setStep={[activeStep, setActiveStep]} />,
    <Institution setStep={[activeStep, setActiveStep]} />,
    <FarmerInformation setStep={[activeStep, setActiveStep]} />,
  ];
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box>{steps[activeStep.activeStep]}</Box>;
    </Box>
  );
}
