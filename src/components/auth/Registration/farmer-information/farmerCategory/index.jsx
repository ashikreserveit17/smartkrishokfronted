import { Checkbox, Col, Layout, Row, Space, Radio } from 'antd';
import UploadImage from './components/Upload';
import { Button } from '@mui/material';

export default function FarmerCategory() {
  return (
    <>
      <div>
        <Space direction="vertical">
          <Layout>
            <form className="space-y-6 ">
              <Row>
                <Col>
                  <UploadImage />
                </Col>
              </Row>
              <Row gutter={[10]}>
                <Col className="text-xl" lg={{ span: 1 }}>
                  ২.
                </Col>
                <Col lg={{ span: 5, offset: 1 }} xs={{ span: 24, offset: 2 }}>
                  {' '}
                  <Checkbox className="text-xl" lg={{ span: 7 }}>
                    ব্যাক্তি{' '}
                  </Checkbox>
                </Col>
                <Col lg={{ span: 5 }} xs={{ offset: 2, span: 24 }}>
                  {' '}
                  <Checkbox className="text-xl">প্রতিষ্ঠান</Checkbox>
                </Col>
                <Col lg={{ span: 8 }} xs={{ offset: 2, span: 24 }}>
                  {' '}
                  <Checkbox className="text-xl"> সমবায় সমিতি </Checkbox>
                </Col>
              </Row>

              <Row>
                <Col lg={{ span: 24 }} className="text-xl">
                  ৩. আপনি কি এখন স্টোর তৈরী করতে চান ?{' '}
                </Col>
              </Row>

              <Row>
                <Col lg={{ offset: 2 }} xs={{ offset: 2 }}>
                  <Radio.Group>
                    <Radio value={true} className="text-xl">
                      হ্যা
                    </Radio>
                    <Radio value={false} className="text-xl">
                      না{' '}
                    </Radio>
                  </Radio.Group>
                </Col>
              </Row>
              <Row>
                <Col className="text-xl">
                  ৪. কোন ধরনের কৃষি/ চাষাবাদ / উৎপাদনের সাথে যুক্ত ?
                </Col>
              </Row>
              <Row>
                <Col offset={2} lg={{ span: 5 }} xs={24}>
                  {' '}
                  <Checkbox className="text-xl">কৃষি </Checkbox>
                </Col>
                <Col lg={{ span: 7 }} xs={{ offset: 2 }}>
                  {' '}
                  <Checkbox className="text-xl">প্রাণিসম্পদ</Checkbox>
                </Col>
                <Col lg={{ span: 5 }} xs={{ offset: 2 }}>
                  {' '}
                  <Checkbox className="text-xl"> মৎস্য </Checkbox>
                </Col>
              </Row>
            </form>
          </Layout>
        </Space>
        {/* <form className="text-xl p-5">
          <div>
            <UploadImage />
          </div>
          <div className="flex gap-2 mt-5">
            <div>২.</div>
            <div className="flex gap-5 items-center max-md:flex-col">
              <Checkbox className="text-xl">ব্যাক্তি </Checkbox>
              <Checkbox className="text-xl">প্রতিষ্ঠান</Checkbox>
              <Checkbox className="text-xl"> সমবায় সমিতি </Checkbox>
            </div>
          </div>
          <div className="mt-14">
            <div>৩. আপনি কি এখন স্টোর তৈরী করতে চান ? </div>
          </div>
          <div className="flex items-center mt-5 max-md:flex-col ">
            <div className="flex gap-2 max-md:flex-col">
              {" "}
              <div>
                <Checkbox className="text-xl">হ্যা </Checkbox>
              </div>
              <div>অথবা</div>
              <div>
                <Checkbox className="text-xl">না </Checkbox>
              </div>
            </div>
            <div>
              <Input placeholder="স্টোরের নাম লিখুন" size="large" />
            </div>
          </div>
          <div className="mt-14">
            <div>৩. কোন ধরনের কৃষি/ চাষাবাদ / উৎপাদনের সাথে যুক্ত ?</div>
            <div className="mt-5">
              <Checkbox className="text-xl">কৃষি </Checkbox>
              <Checkbox className="text-xl">প্রাণিসম্পদ</Checkbox>
              <Checkbox className="text-xl"> মৎস্য </Checkbox>
            </div>
          </div>
          <div className="mt-14">
            <Button size="large" variant="contained" sx={{ borderRadius: 10 }}>
              সংরক্ষণ করুন এবং পরবর্তী পৃষ্ঠা
            </Button>
          </div>
        </form> */}
      </div>
    </>
  );
}
