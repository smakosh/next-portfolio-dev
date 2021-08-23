import Link from 'next/link';
import { useTheme } from 'providers/ThemeProvider';
import ToggleTheme from '..//ToggleTheme';
import { Wrapper } from './styles';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  const { theme } = useTheme();

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <Link href="#about">
        <a>About</a>
      </Link>
      <Link href="#projects">
        <a>Projects</a>
      </Link>
      <Link href="#contact">
        <a>Contact</a>
      </Link>
      <ToggleTheme />
    </Wrapper>
  );
};

export default NavbarLinks;
