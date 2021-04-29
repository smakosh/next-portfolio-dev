import { FC } from 'react';
import { useCustomTheme } from 'providers/ThemeProvider';
import GlobalStyle from 'components/ui/GlobalStyle';
import Footer from 'components/ui/theme/Footer';

const Layout: FC = ({ children }) => {
  const theme = useCustomTheme();
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
