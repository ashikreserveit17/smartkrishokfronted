import Sign from '../../../components/auth/Sign';

export default function Signin() {
  return (
    <>
      <div className="login-container">
        <div className="login-form-box p-10  md:w-1/3 space-y-5">
          <Sign></Sign>
        </div>
      </div>
    </>
  );
}
