/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import Image from 'next/image';
import StoreLogo from '../../../../public/store.png';
import Minus from '../../../../public/minus.svg';
import * as React from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Iconify from '../../../components/Iconify';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import MobileAppImg from '../../../assets/mobileapp.png';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
export default function MobileAddUsingStep() {
  const [toggle, setToggle] = React.useState(false);
  console.log('🚀 ~ index ~ toggle:', toggle);
  const handle = () => {
    setToggle((prev) => !prev);
  };
  const [expanded, setExpanded] = React.useState(false > 'panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    // border: '1px solid #01803780',
    // borderRadius: '10px',
    margin: '20px 0px',
    '&:(:last-child)': {
      border: 'none',
      // borderRadius: '10px',
      // borderBottom: 0,
      // borderBottom: '1px solid #01803780',
    },
    '&::before': {
      display: 'none',
    },
  }));
  const accordionClassName = 'rounded-[10px] border-[#01803780] border-[1px]';
  return (
    <div className="mt-[80px]">
      <div className="text-center ">
        <h2 className="text-4xl text-center max-sm:text-lg font-bold">
          কীভাবে আপনি স্মার্ট কৃষি সাইট থেকে পরিষেবা পাবেন!
        </h2>
        <p className="max-sm:text-sm text-slate-400 mt-2">
          সহজ এবং দ্রুত প্রক্রিয়া
        </p>
      </div>
      <div className="px-[40px] lg:px-[100px]">
        <div className="flex justify-center xl:gap-x-32  max-lg:gap-x-10 max-md:flex-col mt-5">
          <div className=" flex justify-center">
            <Image src={MobileAppImg} alt="mobile" />
          </div>
          <div className=" mt-6">
            <Accordion
              defaultExpanded
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
              className={expanded === 'panel1' ? accordionClassName : ''}
              // sx={{
              //   '&.MuiAccordion-root': {
              //     border: '1px solid #01803780', // Your custom border styles
              //     borderRadius: '10px', // Your custom border-radius
              //     margin: '20px 0px',
              //   },
              // }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 'panel1' ? (
                    <Iconify
                      icon="ic:baseline-minus"
                      className="text-green-900"
                    />
                  ) : (
                    <Iconify icon="ic:round-plus" className="text-green-900" />
                  )
                }
                aria-controls="panel1-content"
                // id="panel1-header"
                onClick={handle}
              >
                ১. অ্যাপটি ডাউনলোড করে সাইন আপ করুন
              </AccordionSummary>
              <AccordionDetails>
                গুগল প্লে স্টোর থেকে অ্যাপটি ইনস্টল করে অ্যাপে রেজিস্ট্রেশন{' '}
                <br />
                সম্পন্ন করুন।
                <Image src={StoreLogo} alt="" className="mt-2" />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
              className={expanded === 'panel2' ? accordionClassName : ''}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 'panel2' ? (
                    <Iconify
                      icon="ic:baseline-minus"
                      className="text-green-900"
                    />
                  ) : (
                    <Iconify icon="ic:round-plus" className="text-green-900" />
                  )
                }
                aria-controls="panel2-content"
                id="panel2-header"
                onClick={handle}
              >
                ২. লোকেশন সিলেক্ট করুন
              </AccordionSummary>
              <AccordionDetails>{/* details */}</AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
              className={expanded === 'panel3' ? accordionClassName : ''}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 'panel3' ? (
                    <Iconify
                      icon="ic:baseline-minus"
                      className="text-green-900"
                    />
                  ) : (
                    <Iconify icon="ic:round-plus" className="text-green-900" />
                  )
                }
                aria-controls="panel3-content"
                id="panel3-header"
              >
                ৩. উপযুক্ত সেবা ধরন নির্বাচন করুন
              </AccordionSummary>
              <AccordionDetails>{/* details */}</AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
              className={expanded === 'panel4' ? accordionClassName : ''}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 'panel4' ? (
                    <Iconify
                      icon="ic:baseline-minus"
                      className="text-green-900"
                    />
                  ) : (
                    <Iconify icon="ic:round-plus" className="text-green-900" />
                  )
                }
                aria-controls="panel3-content"
                id="panel3-header"
              >
                ৪. তারিখ, সময় এবং অন্যান্য তথ্য প্রদান করুন
              </AccordionSummary>
              <AccordionDetails>{/* *details */}</AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
              className={expanded === 'panel5' ? accordionClassName : ''}
            >
              <AccordionSummary
                expandIcon={
                  expanded === 'panel5' ? (
                    <Iconify
                      icon="ic:baseline-minus"
                      className="text-green-900"
                    />
                  ) : (
                    <Iconify icon="ic:round-plus" className="text-green-900" />
                  )
                }
                aria-controls="panel3-content"
                id="panel3-header"
              >
                ৫. পরিষেবা
              </AccordionSummary>
              <AccordionDetails>{/* *details */}</AccordionDetails>
            </Accordion>
          </div>
          {/* <div className="w-full flex  lg:justify-end  justify-center">
            <Image src={MobileAppImg} alt="mobile" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
