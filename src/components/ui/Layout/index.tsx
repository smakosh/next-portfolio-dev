import { ReactNode } from 'react';
import Footer from 'components/ui/theme/Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
