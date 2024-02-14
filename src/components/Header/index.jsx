// import Image from 'next/image';
// import React from 'react';
// import BdLogo from '../../../public/bd.svg';
// import Logo from '../../../public/logo.svg';
// export default function index() {
//   const navLink = [
//     {
//       id: 1,
//       name: 'হোম',
//     },
//     {
//       id: 2,
//       name: 'কৃষিসেবা',
//     },
//     {
//       id: 3,
//       name: 'কৃষিসেবা ফর্ম',
//     },
//     {
//       id: 4,
//       name: 'অর্জনসমূহ',
//     },
//     {
//       id: 5,
//       name: 'আইন ও বিধি',
//     },
//     {
//       id: 6,
//       name: 'কৃষকের হাট',
//     },
//   ];
//   return (
//     <>
//       <div className="h-full  px-[40px] lg:px-[100px] flex justify-between items-center pt-2 pb-2 border-b-2 md:flex-row  flex-col">
//         <div className="flex gap-2 items-center">
//           <div>
//             <Image src={BdLogo} alt="bangladesh-logo" width={70} height={70} />
//           </div>
//           <div>
//             আড়াইহাজার <br /> উপজেলা
//           </div>
//           <div className="ml-2">
//             <Image src={Logo} alt="logo" width={70} height={70} />
//           </div>
//         </div>
//         <div className="max-md:mt-2 max-sm:text-xs">
//           ১৩ মাঘ ১৪৩০ / শুক্রবার, জানুয়ারী ২৬, ২০২৪
//         </div>
//       </div>

//       <nav className="bg-white border-gray-200 dark:bg-gray-900 my-[10px]">
//         <div className="flex flex-wrap items-center justify-between px-[40px] lg:px-[100px] ">
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//             <button className="bg-[#009164] text-white rounded-full pt-2 pb-2 pl-5 pr-5 ">
//               কৃষক লগ-ইন
//             </button>
//             <button
//               data-collapse-toggle="navbar-cta"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-cta"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-cta"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               {navLink.map((item) => {
//                 return (
//                   <li
//                     key={item.id}
//                     className="cursor-pointer hover:text-zinc-500 transition-colors"
//                   >
//                     {item.name}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
'use client';
import * as React from 'react';
import Image from 'next/image';
// import React from 'react';
import BdLogo from '../../../public/bd.svg';
import Logo from '../../../public/Smart farmer logo.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
// import BanglaDate from '@/components/BanglaDate';
// import AdbIcon from '@mui/icons-material/Adb';
import styles from './Navbar.module.css';
import BanglaDate from '../banglaDate';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navLink = [
    {
      id: 1,
      name: 'হোম',
      link: 'home',
    },
    {
      id: 2,
      name: 'অর্জনসমূহ',
      link: 'achievements',
    },
    {
      id: 3,
      name: 'গ্যালারি',
      link: 'gallery',
    },
    {
      id: 4,
      name: 'যোগাযোগ',
      link: 'communication',
    },
  ];

  const [isSticky, setIsSticky] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="h-full  px-[40px] lg:px-[100px] flex justify-between items-center pt-2 pb-2 border-b-2 md:flex-row  flex-col"
        id="home"
      >
        {' '}
        <Link href="/">
          <div className="flex gap-2 items-center">
            {' '}
            <div>
              {' '}
              <Image
                src={BdLogo}
                alt="bangladesh-logo"
                width={70}
                height={70}
              />{' '}
            </div>{' '}
            <div>
              <span className="font-semibold sm:text-sm max-[500px]:text-xs">
                উপজেলা প্রশাসন <br /> আড়াইহাজার{' '}
              </span>
            </div>{' '}
            <div className="ml-2 md:hidden">
              <Image src={Logo} alt="logo" width={80} height={80} />{' '}
            </div>{' '}
          </div>{' '}
        </Link>
        <div className="ml-2 max-md:hidden ">
          <Image src={Logo} alt="logo" width={70} height={70} />{' '}
        </div>
        <div className="max-md:mt-2 max-sm:text-xs">
          {/* 20 মাঘ ১৪৩০ / শুক্রবার, জানুয়ারী ২৬, ২০২৪{' '}
           */}
          <BanglaDate />
        </div>{' '}
      </div>

      <div className={` ${isSticky ? styles.sticky : ''}`}>
        <nav
          // className={isSticky ? 'sticky' : ''}
          className={` py-[10px] `}
          // style={
          //   isSticky
          //     ? {
          //         position: 'fixed',
          //         top: 0,
          //         left: 0,
          //         padding: '10px 0px',
          //         margin: 0,
          //         width: '100%',
          //         zIndex: 100,
          //         backgroundColor: 'rgb(4 114 39)',
          //         transition: 'background-color .2s ease',
          //         color: 'white',
          //       }
          //     : {}
          // }
        >
          <div className="flex flex-wrap items-center justify-between px-[40px] lg:px-[100px] ">
            <div className="flex max-md:order-2 md:order-2  space-x-3 md:space-x-0 ">
              <Link href="/sign">
                {' '}
                <button className="bg-[#009164] text-white rounded-full py-1 px-3 ">
                  <span className="max-[500px]:text-xs">লগ-ইন/সাইন আপ</span>
                </button>
              </Link>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                {navLink.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="cursor-pointer hover:text-zinc-500 transition-colors"
                      id="ashik"
                    >
                      <a href={`#${item.link}`}>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex xs:flex md:hidden max-md:order-1 ">
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
                onClick={handleOpenNavMenu}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navLink.map((nav) => (
                  <MenuItem key={nav.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <a href={`#${nav.link}`}>{nav.name}</a>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </nav>
      </div>
      {/* <AppBar position="static"> */}
      {/* </AppBar> */}
    </>
  );
}
