import { FC } from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import GlobalStyle from '../GlobalStyle';
import Footer from '../theme/Footer';

const Layout: FC = ({ children }) => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
