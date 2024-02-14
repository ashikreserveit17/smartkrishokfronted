import Image from 'next/image';
import React from 'react';
import truck from '../../../../public/truck.svg';
import cow from '../../../../public/cow.svg';
import fish from '../../../../public/fish.svg';
import truckText from '../../../../public/ag-text.svg';
import animaltext from '../../../../public/animal-text.svg';
import fishText from '../../../../public/fish-text.svg';

export default function index() {
  const data = [
    {
      id: 1,
      img: '/assets/track.svg',
      name: 'কৃষি',
      dec: '',
    },
    {
      id: 2,
      img: '/assets/cow.svg',
      name: 'প্রাণিসম্পদ',
      dec: '',
    },
    {
      id: 3,
      img: '/assets/fish.svg',
      name: 'মৎস্য',
      dec: '',
    },
    {
      id: 4,
      img: '/assets/up_datenew_market.svg',
      name: 'স্মার্ট কৃষকের হাট ',
      dec: '',
    },
    {
      id: 5,
      img: '/assets/new_loan1.svg',
      name: 'স্মার্ট লোন ব্যবস্থাপনা',
      dec: '',
    },
    {
      id: 6,
      img: '/assets/lilaboti.svg',
      name: 'লিলাবতী',
      dec: 'কৃত্রিম বুদ্ধিমত্তার মাধ্যমে রোগ/বালাই নির্ণয় ও সেবা',
    },
    {
      id: 7,
      img: '/assets/smart-farmer.svg',
      name: 'স্মার্ট উঠান বৈঠক',
      dec: '',
    },
    {
      id: 8,
      img: '/assets/track.svg',
      name: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',
      dec: '',
    },
    {
      id: 9,
      img: '/assets/track.svg',
      name: 'সরাসরি যোগাযোগ',
      dec: '',
    },
  ];

  return (
    <div className="w-full mt-[30px]">
      {/* <div className="flex justify-center">
        <h2 className="text-4xl font-bold">কৃষিসেবা</h2>
      </div> */}
      <div>
        <div className="flex flex-wrap justify-center gap-5 ">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full max-[639px]:w-1/3 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 hover:cursor-pointer hover:scale-105 transition duration-700 "
            >
              <div className="rounded-lg border-2 border-[#009200] p-5 flex flex-col justify-center items-center hover:bg-slate-100 h-44 max-[900px]:h-48 max-[500px]:w-36 max-[400px]:w-32  ">
                <div className="mb-3">
                  <Image
                    src={item.img}
                    alt=""
                    // className="object-contain"
                    width="100"
                    height="60"
                    // fill={true}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold max-[500px]:text-base">
                    {item.name}
                  </p>
                  <span className="text-[12px] max-[500px]:text-[8px] max-[500px]:font-bold ">
                    {item.dec}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
