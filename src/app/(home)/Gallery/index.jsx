'use client';

import { Box, Tab, Tabs } from '@mui/material';
import { Image as AntImage } from 'antd';
import Image from 'next/image';
import React from 'react';

export default function Gallery() {
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
      img: '/assets/smart-farmer.svg',
      name: 'স্মার্ট কৃষকের হাট ',
      dec: '',
    },
    {
      id: 5,
      img: '/assets/track.svg',
      name: 'স্মার্ট লোন ব্যবস্থাপনা',
      dec: '',
    },
    {
      id: 6,
      img: '/assets/track.svg',
      name: 'লিলাবতী',
      dec: 'কৃত্রিম বুদ্ধিমএার মাধ্যমে রোগ/বালাই নির্ণয় ও সেবা',
    },
    {
      id: 7,
      img: '/assets/track.svg',
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
      name: 'যোগাযোগ',
      dec: '',
    },
  ];
  const gallery = [
    {
      id: 1,
      img: '/assets/gallery/img2.png',
    },
    {
      id: 2,
      img: '/assets/gallery/img1.png',
    },
    {
      id: 3,
      img: '/assets/gallery/img3.png',
    },
    {
      id: 4,
      img: '/assets/gallery/img4.png',
    },
    {
      id: 5,
      img: '/assets/gallery/img5.png',
    },
    {
      id: 6,
      img: '/assets/gallery/img2.png',
    },
  ];
  const [visible, setVisible] = React.useState(undefined);
  // Calling webWorker hooks to process images
  //   const [galleryImg, setGalleryImg] = useState([]);
  //   console.log('🚀 ~ galleryImg:', galleryImg);
  //   const onImagesVenderGalleryProcessed = useCallback((data: any) => {
  //     // Handle the processed data received from the Web Worker
  //     setGalleryImg(data);
  //   }, []);
  //   useImageWorker(
  //     gallery.map((item) => item.img),
  //     onImagesVenderGalleryProcessed
  //   );

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      className="w-full mt-[70px]  pt-5 px-[40px] lg:px-[100px]"
      id="gallery"
    >
      <div className="mb-5">
        <h2 className="text-4xl max-sm:text-lg font-bold flex justify-center">
          গ্যালারি
        </h2>
        <p className="my-1  max-sm:text-sm text-slate-400 flex justify-center">
          আপনার ব্যবসার জন্য নিয়মিত সেবা.
        </p>
      </div>
      <Box className="flex justify-center mb-4">
        <Tabs
          value={value}
          onChange={handleChange}
          //   textColor="secondary"
          //   indicatorColor="secondary"
          //   variant="scrollable"
          //   scrollButtons
          //   allowScrollButtonsMobile
          aria-label="secondary tabs example"
          //   className="text-[#558E61]"

          sx={{
            '& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected ': {
              color: '#558E61',
              //   fontSize: '18px',
            },
            '& .css-1aquho2-MuiTabs-indicator': {
              backgroundColor: '#558E61',
            },
          }}
        >
          <Tab
            value="one"
            label="সব ছবি"
            className="max-sm:text-sm text-lg font-semibold"
          />
          <Tab
            value="two"
            label="কৃষি"
            className="text-lg max-sm:text-sm font-semibold"
          />
          <Tab
            value="three"
            label="প্রাণিসম্পদ"
            className="text-lg max-sm:text-sm font-semibold"
          />
          <Tab
            value="four"
            label="মৎস্য"
            className="text-lg max-sm:text-sm font-semibold"
          />
        </Tabs>
      </Box>
      <div>
        <div className="mb-3 w-full flex justify-center">
          <Image
            src="/assets/gallery/img.png"
            alt=""
            width={944}
            height={330}
            // layout="responsive"
            priority
          />
        </div>
      </div>

      <div className="flex justify-center flex-row flex-wrap gap-2 mt-4">
        {gallery?.slice(0, 6)?.map?.((image, index) => (
          <Image
            src={image?.img}
            alt={image?.id}
            width={167}
            height={167}
            key={image?.id}
            className="h-32 w-40 rounded object-cover object-center overflow-hidden cursor-pointer  border border-slate-200 "
            onClick={() => setVisible(index)}
          />
        ))}
        {/* {!!gallery?.[5] && (
          <div className="relative">
            <Image
              src={gallery?.[5]?.img}
              key={gallery?.[5]?.id}
              className="h-24 w-24 rounded"
              alt="error"
              width={167}
              height={167}
            />
            <div
              className="h-32 w-40  rounded overflow-hidden backdrop-blur-sm backdrop-brightness-50 absolute top-0 flex flex-row items-center justify-center text-white font-bold text-2xl cursor-pointer"
              onClick={() => setVisible(5)}
            >
              + {(gallery?.length || 0) - 5}
            </div>
          </div>
        )} */}
      </div>
      {visible !== undefined && (
        <div className="hidden">
          <AntImage.PreviewGroup
            preview={{
              visible: visible !== undefined,
              onVisibleChange: () => setVisible(undefined),
              keyboard: true,
              destroyOnClose: true,
              current: visible,
            }}
          >
            {/* {overviewData?.vendorGalleries?.map?.((image: any) => ( */}
            {gallery?.map?.((image) => (
              <AntImage
                // src={image?.imageUrl}
                src={image.img}
                height={176}
                width={176}
                alt={image?.id}
                key={image?.id}
                className="h-6/12 w-6/12"
              />
            ))}
          </AntImage.PreviewGroup>
        </div>
      )}
    </div>
  );
}
