'use client';
import { Box, Button, MobileStepper } from '@mui/material';
import React from 'react';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
export default function Livestock({ setStep, maxSteps }) {
  const [activeStep, setActiveStep] = setStep;
  console.log('🚀 ~ Livestock ~ activeStep:', activeStep);
  //   const maxSteps = 3;
  const handleBack = () => {
    setActiveStep((prevActiveStep) => ({
      ...prevActiveStep,
    }));
  };
  return (
    <div>
      <div className="my-10 ml-1">Livestock</div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            '&.MuiButton-contained': {
              color: '#000000',
              backgroundColor: 'rgba(0, 145, 100, 0.23)',
              borderRadius: '60px',
            },
          }}
          disabled={activeStep.activeStep === 0}
          onClick={() => {
            const handleRedirect = () => {
              const matchedItem = activeStep.data.find((x) =>
                ['মৎস্য'].includes(x)
              );
              console.log('🚀 ~ handleRedirect ~ matchedItem:', matchedItem);

              if (matchedItem) {
                const stepIncrement = {
                  // প্রাণিসম্পদ: 2,
                  মৎস্য: 1,
                }[matchedItem];

                setActiveStep((prevActiveStep) => ({
                  ...prevActiveStep,
                  activeStep: prevActiveStep.activeStep + stepIncrement,
                }));
              } else {
                setActiveStep((prevActiveStep) => ({
                  ...prevActiveStep,
                  activeStep: 7,
                }));
              }
            };
            handleRedirect();
          }}
          // onClick={() => {
          //   setActiveStep((prevActiveStep) => ({
          //     ...prevActiveStep,
          //     activeStep: prevActiveStep.activeStep - 1,
          //     // data: 'data',
          //   }));
          // }}
        >
          আগের পৃষ্ঠায়
        </Button>
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
            const handleRedirect = () => {
              const matchedItem = activeStep.data.find((x) =>
                ['মৎস্য'].includes(x)
              );
              console.log('🚀 ~ handleRedirect ~ matchedItem:', matchedItem);

              if (matchedItem) {
                const stepIncrement = {
                  // প্রাণিসম্পদ: 2,
                  মৎস্য: 1,
                }[matchedItem];

                setActiveStep((prevActiveStep) => ({
                  ...prevActiveStep,
                  activeStep: prevActiveStep.activeStep + stepIncrement,
                }));
              } else {
                setActiveStep((prevActiveStep) => ({
                  ...prevActiveStep,
                  activeStep: 7,
                }));
              }
            };
            handleRedirect();
          }}
        >
          {activeStep.activeStep === maxSteps - 1
            ? 'সংরক্ষণ করুন'
            : 'সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা'}
        </Button>
      </Box>
    </div>
  );
}
