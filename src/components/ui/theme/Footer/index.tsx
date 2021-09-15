import Image from 'next/image';
import GithubIcon from '../../../../assets/social/github.svg';
import StackOverflowIcon from '../../../../assets/social/stackoverflow.svg';
import TelegramIcon from '../../../../assets/social/telegram.svg';
import TwitterIcon from '../../../../assets/social/twitter.svg';
import Container from '../../Container';
import social from './social.json';
import { Details, Flex, Links, Wrapper } from './styles';

type Icons = {
  Telegram: string;
  Github: string;
  StackOverflow: string;
  Twitter: string;
};

const icons = {
  Telegram: TelegramIcon,
  Github: GithubIcon,
  StackOverflow: StackOverflowIcon,
  Twitter: TwitterIcon,
};

const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>John Doe</h2>
        <span>
          © All rights are reserved | {new Date().getFullYear()} | Made with
          <span aria-label="love" role="img">
            💖
          </span>
          by
          <a href="https://smakosh.com/?ref=portfolio-dev" rel="noopener noreferrer" target="_blank">
            Smakosh
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link }) => {
          if (name in icons) {
            const src = icons[name as keyof Icons];
            return (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                <Image width={24} height={24} layout="fixed" src={src} alt={name} />
              </a>
            );
          }
          return null;
        })}
      </Links>
    </Flex>
  </Wrapper>
);

export default Footer;
