import Link from 'next/link';
import { useCustomTheme } from 'providers/ThemeProvider';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

const Skills = () => {
  const theme = useCustomTheme();

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img
            src="assets/illustrations/skills.svg"
            alt="I’m John and I’m a Backend & Devops engineer!"
          />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy.
          </p>
          <Link href="#contact">
            <Button as="a">Hire me</Button>
          </Link>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
