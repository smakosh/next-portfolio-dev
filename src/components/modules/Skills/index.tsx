import Link from 'next/link';
import Image from 'next/future/image';

const Skills = () => (
  <div className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top" id="about">
    <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex-none lg:flex-1">
        <Image
          src="/assets/illustrations/skills.svg"
          alt="I’m John and I’m a Backend & Devops engineer!"
          width={447}
          height={326}
        />
      </div>
      <div className="flex-none lg:flex-1 pl-0 lg:pl-8">
        <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">More about me</h2>
        <p className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy.
        </p>
        <Link href="#contact" passHref>
          <a className="button button-primary">Hire me</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Skills;
