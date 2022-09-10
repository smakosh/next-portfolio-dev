import Image from 'next/future/image';
import social from './social.json';

const Footer = () => (
  <div className="pt-56 pb-16 bg-[url('/assets/illustrations/footer.svg')] bg-cover bg-top bg-no-repeat">
    <div className="container flex items-center md:items-end text-center md:text-left justify-between flex-col md:flex-row">
      <div className="mb-8 md:mb-0">
        <h2 className="text-brand-primary font-bold text-2xl mb-4">John Doe</h2>
        <span className="text-brand-primary">
          © All rights are reserved | {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a
            href="https://smakosh.com/?ref=portfolio-dev"
            rel="noopener noreferrer"
            target="_blank"
            className="text-brand-primary"
          >
            Smakosh
          </a>
        </span>
      </div>
      <div className="flex items-center">
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
            className="mr-2 last:mr-0"
          >
            <Image src={icon} alt={name} width={24} height={24} />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
