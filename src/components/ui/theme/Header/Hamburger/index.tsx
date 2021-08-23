import { useTheme } from 'providers/ThemeProvider';
import { Wrapper, Bar } from './styles';

type HamburgerProps = {
  sidebar?: boolean;
  toggle: (value: boolean) => void;
};

const Hamburger = ({ sidebar, toggle }: HamburgerProps) => {
  const { theme } = useTheme();

  return (
    <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
      <Bar top sidebar={sidebar} theme={theme} />
      <Bar mid sidebar={sidebar} theme={theme} />
      <Bar bottom sidebar={sidebar} theme={theme} />
    </Wrapper>
  );
};

export default Hamburger;
