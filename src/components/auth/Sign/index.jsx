'use client';

import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import TextField from '@mui/material/TextField';
// import { Button } from '@mui/material';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function Sign() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
        <div>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 11,
                message: 'ফোন নম্বর এগারো সংখ্যার হতে হবে',
              },
              maxLength: {
                value: 11,
                message: 'ফোন নম্বর এগারো সংখ্যা অতিক্রম করেছে',
              },

              pattern: {
                value: /^[0-9]+$/,
                message: 'কেবল সংখ্যা অনুমোদন করা হবে',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                label="ফোন নম্বর"
                autoComplete="off"
                variant="outlined"
                defaultValue=""
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                value={value}
                className="bg-white w-full rounded-md "
                error={!!errors.phone} // Show error state if there is a validation error
                // helperText={errors.phone && errors.phone.message}
                // type="tel"
                type="number"
              />
            )}
          />
          <Paper elevation={3} />
        </div>

        <div className="mt-3">
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 11,
                message: 'ফোন নম্বর এগারো সংখ্যার হতে হবে',
              },
              maxLength: {
                value: 11,
                message: 'ফোন নম্বর এগারো সংখ্যা অতিক্রম করেছে',
              },

              pattern: {
                value: /^[0-9]+$/,
                message: 'কেবল সংখ্যা অনুমোদন করা হবে',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextField
                label="পাসওয়ার্ড"
                variant="outlined"
                defaultValue=""
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                value={value}
                className="bg-white w-full rounded-md"
                error={!!errors.password} // Show error state if there is a validation error
                // helperText={errors.password && errors.password?.message}
                // type="tel"
                type="password"
                autoComplete="off"
              />
            )}
          />
        </div>
        {/* {errors.phone?.message} */}
        <div className="w-full mt-5">
          {/* <Link href="/">
            <button
              className="w-full bg-[#009164] text-white py-2 rounded"
              type="submit"
            >
              লগইন করুন
            </button>
          </Link> */}
          <button
            className="w-full bg-[#009164] text-white py-2 rounded"
            type="submit"
          >
            লগইন করুন
          </button>
        </div>
        <div className="mt-5  flex justify-center ">
          আমার কোন একাউন্ট নেই?
          <Link href="">
            {' '}
            <p className="font-bold text-primary pl-1">{'নিবন্ধন করুন'}</p>
          </Link>
        </div>
      </form>
    </>
  );
}
