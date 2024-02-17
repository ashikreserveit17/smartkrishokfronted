'use client';

import { HashLoader } from 'react-spinners';
// import theme from "../../style/theme";
import theme from '../../style/theme';
export default function Spinner() {
  return (
    <div className="relative h-screen">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <HashLoader color="#36d7b7" />
        loading..........
      </div>
    </div>
  );
}
