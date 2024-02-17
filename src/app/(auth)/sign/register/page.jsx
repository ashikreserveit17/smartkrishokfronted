// import dynamic from 'next/dynamic';
// import Spinner from '../../../../components/Spinner';

// const Registration = dynamic(
//   () => import('../../../../components/auth/Registration'),
//   {
//     loading: () => <Spinner />,
//     ssr: false,
//   }
// );
// export default function index() {
//   return (
//     <>
//       <Registration />
//     </>
//   );
// }

import dynamic from 'next/dynamic';
import Spinner from '../../../../components/Spinner';

const Registration = dynamic(
  () => import('../../../../components/auth/Registration'),
  {
    loading: () => <Spinner />,
    ssr: false,
  }
);

export default function index() {
  return <Registration />;
}
