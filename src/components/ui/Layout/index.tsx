import { FC } from 'react';
import { useTheme } from 'next-themes';
import GlobalStyle from 'components/ui/GlobalStyle';
import Footer from 'components/ui/theme/Footer';

const Layout: FC = ({ children }) => {
  const { theme } = useTheme();

  if (!theme) return null;

  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
