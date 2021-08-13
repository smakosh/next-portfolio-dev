import { useTheme } from 'providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

type SideBarProps = {
  sidebar?: boolean;
  toggle: () => void;
};

const Sidebar = ({ sidebar, toggle }: SideBarProps) => {
  const { theme } = useTheme();

  return (
    <Wrapper active={sidebar} onClick={toggle} theme={theme}>
      <NavbarLinks />
    </Wrapper>
  );
};

export default Sidebar;
