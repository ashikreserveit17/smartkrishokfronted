const banglaMonths = [
  'জানুয়ারি',
  'ফেব্রুয়ারি',
  'মার্চ',
  'এপ্রিল',
  'মে',
  'জুন',
  'জুলাই',
  'আগস্ট',
  'সেপ্টেম্বর',
  'অক্টোবর',
  'নভেম্বর',
  'ডিসেম্বর',
];

import { getDate } from 'bangla-calendar';
import banglaNumberConverter from 'bangla-number-converter';
export default function BanglaDate() {
  const banglaDate = new Date();
  const months = new Date().getMonth();
  const day = new Date().getDate();
  const year = new Date().getFullYear();
  const fullEnglishDate =
    banglaMonths[months] +
    ' ' +
    banglaNumberConverter.toBanglaNumber(day) +
    ',' +
    ' ' +
    banglaNumberConverter.toBanglaNumber(year, false);

  return getDate(banglaDate) + '/' + fullEnglishDate;
}
