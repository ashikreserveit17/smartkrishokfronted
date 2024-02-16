"use client"

import styled from "@emotion/styled";
import { AccordionDetails, AccordionSummary } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import Image from "next/image";
import { useState } from "react";
import Iconify from '../../components/Iconify';

const Faq = () => {
    const [selected, setSelected] = useState('agriculture');
    const [toggle, setToggle] = useState(false);
    console.log('🚀 ~ index ~ toggle:', toggle);
    const handle = () => {
        setToggle((prev) => !prev);
    };
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        margin: '20px 0px',
        border: ` 1px solid [#01803780]`,
        '&:not(:last-child)': {
            // borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));
    const accordionClassName = 'rounded-[10px] border-[#01803780] border-[1px]';
    const CategoryCard = ({
        title,
        icon,
        selectionKey,
    }) => {
        return (
            <div
                className={`h-36 w-36 flex flex-col  items-center p-3 gap-5 rounded-lg border border-slate-200 aspect-square justify-center bg-slate-100 cursor-pointer  ${selected === selectionKey
                    ? 'border-2 border-primary-100 bg-primary-50 text-primary-400 border-dashed shadow-md '
                    : ' text-slate-500 '
                    }`}
                onClick={() => setSelected(selectionKey)}
            >
                <Image src={icon} alt="FAQ Icon" width={50} height={50} />
                <h2 className="text-xs font-bold text-center">{title}</h2>
            </div>
        );
    };
    return (
        <div className='mt-[80px]'>

            <div className="align-middle">
                <p className="text-center">সচরাচর জিজ্ঞাসিত প্রশ্ন</p>
                <p className="text-center">আমরা আপনাকে সাহায্য করার জন্য সবচেয়ে সাধারণ প্রশ্ন সংগ্রহ করেছি।</p>
            </div>
            <div className="flex justify-center item-center flex-wrap">
                <div className="grid max-[500px]:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-4 justify-center items-center lg:grid-cols-6 gap-5 my-8  ">
                    <CategoryCard
                        icon={'/assets/track.svg'}
                        title='কৃষি'
                        selectionKey="agriculture"
                    />

                    <CategoryCard
                        icon={'/assets/cow.svg'}
                        title='প্রাণিসম্পদ'
                        selectionKey="Livestock"
                    />
                    <CategoryCard
                        icon={'/assets/fish.svg'}
                        title='মৎস্য'
                        selectionKey="fish"
                    />
                    <CategoryCard
                        icon={'/assets/up_datenew_market.svg'}
                        title='স্মার্ট কৃষকের হাট '
                        selectionKey="smartFarmersHut"
                    />
                    <CategoryCard
                        icon={'/assets/new_loan1.svg'}
                        title='স্মার্ট লোন ব্যবস্থাপনা'
                        selectionKey="SmartLoanManagement"
                    />
                    <CategoryCard
                        icon={'/assets/smart-farmer.svg'}
                        title='স্মার্ট উঠান বৈঠক'
                        selectionKey="smartCourtyardMeeting"
                    />
                </div>
            </div>


            {/* {selected === 'agriculture' && ( */}
            <div className=" mt-6 flex justify-center items-center">
                <div>
                    <Accordion
                        defaultExpanded
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                        className={`${accordionClassName} lg:max-w-5xl max-[468px]:max-w-xs max-[624px]:max-w-md  max-md:max-w-xl max-lg:max-w-2xl mx-auto`}

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
                            গামবোরো একটি ভাইরাসজনিত রোগ। এ রোগে বাংলাদেশে প্রচুর পরিমাণে ব্রয়লার, কক, সোনালী ও লেয়ার মুরগি মারা যায়। তাই এ রোগের মুরগির মৃত্যুর পাশাপাশি আক্রান্ত ফ্লক ইম্যুনোসাপ্রেশনে ভোগে। আর তাই এ রোগকে মুরগির এইডস বলা হয়। আর এ ধরনের ফ্লক থেকে কখনই আশানুরূপ ফলাফল পাওয়া যায় না।
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                        className={accordionClassName}
                        defaultExpanded
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
                </div>
            </div>
            {/* )} */}
        </div>
    );
};

export default Faq;