import Link from 'next/link';
import { useCustomTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const theme = useCustomTheme();

  return (
    <Wrapper as={Container}>
      <Link href="/" passHref>
        <Brand as="a" theme={theme}>
          John Doe
        </Brand>
      </Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
