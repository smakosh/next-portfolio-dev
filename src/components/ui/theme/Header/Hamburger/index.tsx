import clsx from 'clsx';

type HamburgerProps = {
  sidebar?: boolean;
  toggle: (value: boolean) => void;
};

const Hamburger = ({ sidebar, toggle }: HamburgerProps) => (
  <button
    className={clsx('z-20 top-[1.6rem] right-[1.8rem] cursor-pointer burger-transition absolute block lg:hidden', {
      'right-[66%] md:right-[35%] lg:fixed lg:right-[18%] top-[1.4rem]': sidebar,
    })}
    onClick={() => toggle(!sidebar)}
  >
    <div
      className={clsx('w-6 h-0.5 mb-1.5 burger-bar-transition bg-brand-primary', {
        'translate-y-2 -rotate-[135deg] dark:bg-white': sidebar,
      })}
    />
    <div
      className={clsx('w-6 h-0.5 mb-1.5 bg-brand-primary burger-bar-transition', {
        'scale-0': sidebar,
      })}
    />
    <div
      className={clsx('w-6 h-0.5 mb-1.5 bg-brand-primary burger-bar-transition', {
        'bg-brand-primary dark:bg-white -translate-y-[7px] -rotate-45': sidebar,
      })}
    />
  </button>
);

export default Hamburger;
