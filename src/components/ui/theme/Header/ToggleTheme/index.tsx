import { useCustomTheme, useDispatchTheme } from 'providers/ThemeProvider';
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
      <img
        src={
          theme === 'light' ? '/assets/icons/moon.svg' : '/assets/icons/sun.svg'
        }
        alt={theme}
      />
    </Wrapper>
  );
};

export default ToggleTheme;
