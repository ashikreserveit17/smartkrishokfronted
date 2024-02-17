'use client';

import { Checkbox, Col, Row, Space, Radio, Form, Upload, Modal } from 'antd';
import UploadImage from './components/Upload';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import Iconify from '../../../../Iconify';
export default function FarmerCategoryForm() {
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
  };

  return (
    <>
      <div>
        <Space direction="vertical">
          <Form
            className="space-y-6 "
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
                          <span style={{ color: 'red' }}>{error.message}</span>
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
                          <span style={{ color: 'red' }}>{error.message}</span>
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
                <Button
                  size="large"
                  variant="contained"
                  sx={{ borderRadius: 10 }}
                  type="submit"
                >
                  সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা
                </Button>
              </Col>
            </Row>
          </Form>
        </Space>
      </div>
    </>
  );
}
