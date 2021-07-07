import Image from 'next/image';
import { useCustomTheme, useDispatchTheme } from 'providers/ThemeProvider';
import moonIcon from 'assets/icons/moon.svg';
import sunIcon from 'assets/icons/sun.svg';
import { Wrapper } from './styles';

const ToggleTheme = () => {
  const theme = useCustomTheme();
  const toggleTheme = useDispatchTheme();

  return (
    <Wrapper
      type="button"
      onClick={() => {
        if (toggleTheme) {
          toggleTheme();
        }
      }}
    >
      <Image src={theme === 'light' ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
