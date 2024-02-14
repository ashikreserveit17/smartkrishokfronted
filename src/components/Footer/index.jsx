import Image from 'next/image';
import React from 'react';
import bdLogo from '../../../public/main-logo.png';
import teleLogo from '../../../public/tele-logo.png';
import vectorLogo from '../../../public/vector-logo.png';
import blLogo from '../../../public//bl-logo.png';
import nogodLogo from '../../../public/nogod-logo.png';
import Logo from '../../../public/Smart farmer logo.svg';
import arayhazar from '../../../public/assets/footer/arayhazar.png';
import vector from '../../../public/assets/footer/vector.png';
import fbLink from '../../../public/assets/footer/Link.png';
import youtbubeLink from '../../../public/assets/footer/Link2.png';
import Nagad from '../../../public/assets/footer/Nagad.png';
import banglalink from '../../../public/assets/footer/banglalink-logo-vector 1.png';

export default function Footer() {
  return (
    <div className="" id="communication">
      {/* footer main */}
      <div className="border-t-2"></div>
      <div className="px-[40px] lg:px-[100px]">
        <div className="flex flex-wrap flex-row justify-between py-[60px]  gap-5 items-center  max-[500px]:justify-center">
          <div className="flex min-[1150px]:w-5/12 max-[1150px]:w-11/12 flex-wrap flex-row justify-around  gap-5 items-center ">
            <div>
              <div className="flex gap-2 items-center">
                {' '}
                <div>
                  {' '}
                  <Image src={arayhazar} alt="bangladesh-logo" />{' '}
                </div>{' '}
                <div>
                  <span className="font-bold sm:text-lg">
                    উপজেলা প্রশাসন <br /> আড়াইহাজার{' '}
                  </span>
                </div>{' '}
              </div>{' '}
            </div>
            <div>
              <Image src={Logo} alt="logo" width={100} height={70} />
            </div>

            <div className="flex flex-col justify-center ">
              <div className="mb-6">
                <span className="font-semibold sm:text-sm max-[500px]:text-xs">
                  যোগাযোগ
                </span>
              </div>
              <div className="flex  justify-center gap-x-3 ">
                <Image src={fbLink} alt="bangladesh-logo" />
                <Image src={youtbubeLink} alt="bangladesh-logo" />
              </div>
            </div>
          </div>
          <div className="flex min-[1150px]:w-2/4 max-[1150px]:w-11/12 flex-wrap flex-row justify-around  gap-5 items-center ">
            <div className="flex flex-col justify-center  ">
              <div className="mb-2 flex  justify-center">
                <span className="font-semibold sm:text-sm max-[500px]:text-xs">
                  টেলিযোগাযোগ
                </span>
              </div>
              <div className="flex  justify-center ">
                <Image src={banglalink} alt="bangladesh-logo" height={80} />
              </div>
            </div>
            <div className="flex flex-col justify-center  ">
              <div className="mb-2 flex  justify-center">
                <span className="font-semibold sm:text-sm max-[500px]:text-xs">
                  ডিজিটাল লেনদেন
                </span>
              </div>
              <div className="flex  justify-center ">
                <Image src={Nagad} alt="bangladesh-logo" height={80} />
              </div>
            </div>
            <div className="flex flex-col justify-center  ">
              <div className="mb-2 flex  justify-center">
                <span className="font-semibold sm:text-sm max-[500px]:text-xs">
                  কারিগরি সহায়তায়
                </span>
              </div>
              <div className="flex  justify-center  ">
                <Image src={vector} alt="bangladesh-logo" height={80} />
              </div>
            </div>
          </div>

          {/* <div className="">
            <div className="mb-2">
              <span className="font-semibold sm:text-sm max-[500px]:text-xs">
                ডিজিটাল লেনদেন সহায়তায়
              </span>
            </div>
            <div>
              <Image src={Nagad} alt="bangladesh-logo" />
            </div>
          </div> */}
          {/* <div className="">
            <div className="mb-2">
              <span className="font-semibold sm:text-sm max-[500px]:text-xs">
                কারিগরি সহায়তায়
              </span>
            </div>
            <div>
              <Image src={vector} alt="bangladesh-logo" />
            </div>
          </div> */}
        </div>
      </div>
      {/* footer copyright */}
      <div className="bg-[#009164] text-white text-center py-2 max-sm:text-sm">
        Copyrights © 2024 All Rights Reserved By Upazila Administration,
        Araihazar,Narayanganj.
      </div>
    </div>
  );
}
