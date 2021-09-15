import Link from 'next/link';
import Container from '../../../../../components/ui/Container';
import { useTheme } from '../../../../../providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Brand, Wrapper } from './styles';

const Navbar = () => {
  const { theme } = useTheme();

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
