import Image from 'next/image';
import React from 'react';
import list from '../../../../public/list.svg';
import page from '../../../../public/page.svg';
import stamp from '../../../../public/stamp.svg';
import union from '../../../../public/union.svg';
import taka from '../../../../public/tabler_coin-taka.png';
import StoreLogo from '../../../../public/store.png';
import StoreLogo1 from '../../../../public/assets/image 11.png';
import StoreLogo2 from '../../../../public/assets/image 12.png';
import { Button } from '@mui/material';
const data = [
  {
    id: 1,
    image: list,
    name: '২,৬৪,৮৭,৭২০ জন',
    sub: 'ব্যবহারকারীর সংখ্যা',
    color: '35ba6b1a',
  },
  {
    id: 2,
    image: stamp,
    name: '১,০৮,২৩,৪৩৮ জন',
    sub: 'মোট সেবা গ্রহিতা',
    color: 'f9450b1a',
  },
  {
    id: 3,
    image: taka,
    name: '২,৬৪,৮৭,৭২০ ৳',
    sub: 'মোট বিক্রিত পণ্যের মূল্য',
    color: 'c8044c1a',
  },
  {
    id: 4,
    image: taka,
    name: '২,৬৪,৮৭,৭২০',
    sub: 'মোট প্রদানকৃত লোনের পরিমান',
    color: 'c8044c1a',
  },
];
export default function index() {
  return (
    <>
      <div id="achievements">
        <div className="my-14 max-md:my-5">
          <div className="text-center ">
            <h2 className="text-4xl max-sm:text-lg font-bold">অর্জনসমূহ</h2>
          </div>{' '}
        </div>

        <div className="px-[40px] lg:px-[100px]">
          <div className=" flex  justify-center max-[624px]:gap-2   sm:gap-10 max-sm:justify-center flex-wrap">
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex p-3 border-2  gap-5 shadow-md rounded-xl mb-5"
                >
                  <div className={` w-9 flex justify-center items-center`}>
                    <Image src={item.image} alt="" />
                    {/* <p>looo</p> */}
                  </div>
                  <div className="w-48">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm leading-loose">{item.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="">
        <div className="my-14 max-md:my-5">
          <div className="text-center ">
            <h2 className="text-4xl max-sm:text-lg font-bold">ইভেন্ট ভিডিও</h2>
          </div>{' '}
        </div>
        <div className="px-[40px] lg:px-[100px]">
          <div className="w-full flex flex-wrap justify-center max-[1280px]:justify-around max-[624px]:gap-2 sm:gap-10  max-md:flex-col">
            <div className="max-md:mt-4 w-full md:w-1/3">
              <div className="flex  items-center">
                <div>
                  <p className="text-2xl max-md:text-lg font-bold">
                    ডিজিটাল বাংলাদেশে কৃষি উন্নতি
                  </p>
                  <p className="my-1  max-md:text-sm text-slate-400">
                    স্মার্ট বাংলাদেশের জন্য স্মার্ট কৃষি
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <iframe
                  // width="560"
                  height="350"
                  className="w-full"
                  src="https://www.youtube.com/embed/jo8Joe8XOB4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="max-md:mt-4 w-full md:w-1/3">
              <div className="flex  items-center">
                <div>
                  <p className="text-2xl max-md:text-lg font-bold">
                    ডিজিটাল কৃষি প্রযুক্তি: ভবিষ্যতের কৃষি
                  </p>
                  <p className="my-1  max-md:text-sm text-slate-400">
                    আপনার ব্যবসার জন্য নিয়মিত সেবা.
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <iframe
                  // width="560"
                  height="350"
                  className="w-full"
                  src="https://www.youtube.com/embed/DU0svQm5Wok?si=sYDl0ZWI0JIi7ow3"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="max-md:mt-4 w-full md:w-1/3">
              <div className="flex  items-center">
                <div>
                  <p className="text-2xl max-md:text-lg font-bold">
                    ডিজিটাল বাংলাদেশে কৃষি উন্নতি
                  </p>
                  <p className="my-1  max-md:text-sm text-slate-400">
                    স্মার্ট বাংলাদেশের জন্য স্মার্ট কৃষি
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <iframe
                  // width="560"
                  height="350"
                  className="w-full"
                  src="https://www.youtube.com/embed/8WgcmX37qEM?si=YenWo8HgsfJRM3CX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="max-md:mt-4 w-full md:w-1/3">
              <div className="flex  items-center">
                <div>
                  <p className="text-2xl max-md:text-lg font-bold">
                    ডিজিটাল কৃষি প্রযুক্তি: ভবিষ্যতের কৃষি
                  </p>
                  <p className="my-1 max-md:text-sm text-slate-400">
                    আপনার ব্যবসার জন্য নিয়মিত সেবা.
                  </p>
                </div>
              </div>
              <div className="mt-5  ">
                <iframe
                  height="350"
                  // height="315"
                  className="w-full"
                  src="https://www.youtube.com/embed/95rVyMyeNcc?si=JWTG1aPiWWjbhF7X"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
