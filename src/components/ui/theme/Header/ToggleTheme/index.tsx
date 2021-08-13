import Image from 'next/image';
import { useTheme } from 'providers/ThemeProvider';
import moonIcon from 'assets/icons/moon.svg';
import sunIcon from 'assets/icons/sun.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Wrapper type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <Image src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
