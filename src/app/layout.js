import Footer from '../components/Footer';
import Header from '../components/Header';
import '../style/global.css';

import { Providers } from './_providers';
import { Divider } from 'antd';
// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Smart Krishok',
  description: 'A digital platform for Agricultures',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ fontFamily: 'kalpurushregular' }}>
      <body>
        <Providers>
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </Providers>
      </body>
    </html>
  );
}
