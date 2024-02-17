'use client';
import { Box, Button } from '@mui/material';
import FarmerCategoryForm from './farmerCategory/index';
import Iconify from '../../../Iconify';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Checkbox, Col, Row, Space, Radio, Form, Upload, Modal } from 'antd';
import Image from 'next/image';
export default function FarmerCategory({ setStep, maxSteps }) {
  console.log('🚀 ~ FarmerInformation ~ setStep:', setStep);
  const [activeStep, setActiveStep] = setStep;
  // const maxSteps = 3;
  const handleBack = () => {
    setActiveStep((prevActiveStep) => ({
      ...prevActiveStep,
    }));
  };

  const regiType = {
    person: 0,
    Institute: 1,
    cooperative: 2,
  };
  const { handleSubmit, reset, control } = useForm();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  //file
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <Iconify icon="ic:twotone-plus" className="ml-3" />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const onSubmit = (e) => {
    console.log('🚀 ~ FarmerCategoryForm ~ e:', e);
    let format = { agriculter: '', livestock: '', fish: '' };
    e.typeOfFarming.map((data) => {
      if (data == 'কৃষি') format.agriculter = 'কৃষি';
      if (data == 'প্রাণিসম্পদ') format.livestock = 'প্রাণিসম্পদ';
      if (data == 'মৎস্য') format.fish = 'মৎস্য';
    });
    let formatData = [];
    format.agriculter && formatData.push(format.agriculter);
    format.livestock && formatData.push(format.livestock);
    format.fish && formatData.push(format.fish);
    console.log('🚀 ~ onSubmit ~ a:', formatData);

    console.log('🚀 ~ onSubmit ~ format:', format);
    if (e.regiCategory === 0) {
      setActiveStep((prevActiveStep) => ({
        ...prevActiveStep,
        activeStep: prevActiveStep.activeStep + 1,
        data: formatData,
        registeredCategory: e.regiCategory,
      }));
    }
    if (e.regiCategory === 1) {
      setActiveStep((prevActiveStep) => ({
        ...prevActiveStep,
        activeStep: prevActiveStep.activeStep + 2,
        data: formatData,
        registeredCategory: e.regiCategory,
      }));
    }
    if (e.regiCategory === 2) {
      setActiveStep((prevActiveStep) => ({
        ...prevActiveStep,
        activeStep: prevActiveStep.activeStep + 3,
        data: formatData,
        registeredCategory: e.regiCategory,
      }));
    }
  };
  return (
    <div>
      <div className="my-10 ml-1">
        {/* <FarmerCategoryForm /> */}
        <div>
          <Space direction="vertical">
            <Form
              // className="space-y-6 "
              layout="vertical"
              onFinish={handleSubmit(onSubmit)}
            >
              <Row>
                <Col>
                  <Form.Item>
                    <Upload
                      action="http://localhost:3000/"
                      listType="picture-circle"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                      // defaultFileList={data?.image}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal
                      open={previewOpen}
                      title={previewTitle}
                      footer={null}
                      onCancel={handleCancel}
                    >
                      <Image
                        alt="example"
                        style={{
                          width: '100%',
                        }}
                        src={previewImage}
                      />
                    </Modal>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[10]}>
                <Col lg={{}}>
                  <Form.Item label="২. আপনি কি হিসাবে নিবন্ধিত হতে চান ?">
                    <Controller
                      control={control}
                      name={'regiCategory'}
                      rules={{
                        required: {
                          value: true,
                          message: 'অবশ্যই পূরণ করতে হবে',
                        },
                      }}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { error },
                      }) => (
                        <>
                          <Radio.Group
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                          >
                            <Radio value={regiType.person}>ব্যাক্তি</Radio>
                            <Radio value={regiType.Institute}>প্রতিষ্ঠান</Radio>
                            <Radio value={regiType.cooperative}>
                              সমবায় সমিতি
                            </Radio>
                          </Radio.Group>
                          {error && (
                            <span style={{ color: 'red' }}>
                              {error.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Item label="৩. আপনি কি এখন স্টোর তৈরী করতে চান ? ">
                    <Controller
                      control={control}
                      name={'store'}
                      rules={{
                        required: {
                          value: true,
                          message: 'অবশ্যই পূরণ করতে হবে',
                        },
                      }}
                      render={({
                        field: { onChange, onBlur, value },
                        fieldState: { error },
                      }) => (
                        <>
                          <Radio.Group
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                          >
                            <Radio value={'yes'}>হ্যা</Radio>
                            <Radio value={'no'}>না </Radio>
                          </Radio.Group>
                          {error && (
                            <span style={{ color: 'red' }}>
                              {error.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row>
                <Form.Item label="৪. কোন ধরনের কৃষি/ চাষাবাদ / উৎপাদনের সাথে যুক্ত ?">
                  <Controller
                    control={control}
                    name={'typeOfFarming'}
                    rules={{
                      required: {
                        value: true,
                        message: 'অবশ্যই পূরণ করতে হবে',
                      },
                    }}
                    render={({
                      field: { onChange, onBlur, value },
                      fieldState: { error },
                    }) => (
                      <>
                        <Checkbox.Group
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                        >
                          <Checkbox value={'কৃষি'}>কৃষি </Checkbox>
                          <Checkbox value={'প্রাণিসম্পদ'}>প্রাণিসম্পদ</Checkbox>
                          <Checkbox value={'মৎস্য'}> মৎস্য </Checkbox>
                        </Checkbox.Group>
                        {error && (
                          <span style={{ color: 'red' }}>{error.message}</span>
                        )}
                      </>
                    )}
                  />
                  {/* <Checkbox.Group>
                  <Checkbox>কৃষি </Checkbox>
                  <Checkbox>প্রাণিসম্পদ</Checkbox>
                  <Checkbox> মৎস্য </Checkbox>
                </Checkbox.Group> */}
                </Form.Item>
              </Row>
              <Row>
                <Col lg={{ span: 24 }}>
                  {' '}
                  {/* <Button
                    size="large"
                    variant="contained"
                    sx={{ borderRadius: 10 }}
                    type="submit"
                  >
                    সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা
                  </Button> */}
                  <Box>
                    <Box sx={{ flex: '1 1 auto' }} />

                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        '&.MuiButton-contained': {
                          color: '#FFF',
                          backgroundColor: '#009164',
                          borderRadius: '60px',
                        },
                      }}
                      // onClick={() => {
                      //   setActiveStep((prevActiveStep) => ({
                      //     ...prevActiveStep,
                      //     activeStep: prevActiveStep.activeStep + 1,
                      //     data: e.typeOfFarming,
                      //   }));
                      // }}
                    >
                      {activeStep.activeStep === maxSteps - 1
                        ? 'Finish'
                        : 'সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা'}
                    </Button>
                  </Box>
                </Col>
              </Row>
            </Form>
          </Space>
        </div>
      </div>

      {/* <Box>
        <Box sx={{ flex: '1 1 auto' }} />

        <Button
          type="submit"
          variant="contained"
          sx={{
            '&.MuiButton-contained': {
              color: '#FFF',
              backgroundColor: '#009164',
              borderRadius: '60px',
            },
          }}
          onClick={() => {
            setActiveStep((prevActiveStep) => ({
              ...prevActiveStep,
              activeStep: prevActiveStep.activeStep + 1,
              data: e.typeOfFarming,
            }));
          }}
        >
          {activeStep.activeStep === maxSteps - 1
            ? 'Finish'
            : 'সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা'}
        </Button>
      </Box> */}
    </div>
  );
}
