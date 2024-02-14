'use client';
import Image from 'next/image';
import React from 'react';
import Img1 from '../../../assets/img-1.png';

import Img2 from '../../../assets/img-2.png';
import Img3 from '../../../assets/img-3.png';
import Img5 from '../../../assets/img-4.png';
import { Box, Typography } from '@mui/material';

// Swiper Component
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function asdasdasd() {
  return (
    <>
      <div className="relative">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          slidesPerView={'auto'}
          spaceBetween={5}
          modules={[Autoplay, Pagination]}
          className="p-4 pt-2 mt-5 [&>div.swiper-wrapper]:mb-6 [&>.swiper-pagination>.swiper-pagination-bullet-active]:bg-primary"
        >
          <SwiperSlide>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                // boxShadow: 5,
                '& img': {
                  position: 'relative',
                  width: '100%',
                  height: {
                    xs: '250px',
                    md: '430px',
                  },
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                '& div': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                  background:
                    'linear-gradient(118.44deg, rgba(174, 187, 204, 0) 0%, rgba(68, 70, 76, 0.473287) 26.85%, rgba(33, 32, 34, 0.63) 53.18%, rgba(26, 22, 30, 0.99) 97.24%, #161C24 97.25%)',
                },
              }}
              className="shadow-md shadow-slate-800"
            >
              <Image
                src={Img1}
                alt={'Reserveit Banner'}
                width={944}
                height={330}
                // layout="responsive"
                priority
              />
              {/* <Image src={Img2} alt="image-2" /> */}
              {/* <div /> */}
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                // boxShadow: 5,
                '& img': {
                  position: 'relative',
                  width: '100%',
                  height: {
                    xs: '250px',
                    md: '430px',
                  },
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                '& div': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                  background:
                    'linear-gradient(118.44deg, rgba(174, 187, 204, 0) 0%, rgba(68, 70, 76, 0.473287) 26.85%, rgba(33, 32, 34, 0.63) 53.18%, rgba(26, 22, 30, 0.99) 97.24%, #161C24 97.25%)',
                },
              }}
              className="shadow-md shadow-slate-800"
            >
              <Image
                src={Img2}
                alt={'Reserveit Banner'}
                width={944}
                height={330}
                // layout="responsive"
                priority
              />
              {/* <Image src={Img2} alt="image-2" /> */}
              {/* <div /> */}
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                // boxShadow: 5,
                '& img': {
                  position: 'relative',
                  width: '100%',
                  height: {
                    xs: '250px',
                    md: '430px',
                  },
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                '& div': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
                  background:
                    'linear-gradient(118.44deg, rgba(174, 187, 204, 0) 0%, rgba(68, 70, 76, 0.473287) 26.85%, rgba(33, 32, 34, 0.63) 53.18%, rgba(26, 22, 30, 0.99) 97.24%, #161C24 97.25%)',
                },
              }}
              className="shadow-md shadow-slate-800"
            >
              <Image
                src={Img3}
                alt={'Reserveit Banner'}
                width={944}
                height={330}
                // layout="responsive"
                priority
              />
              {/* <Image src={Img2} alt="image-2" /> */}
              {/* <div /> */}
            </Box>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
