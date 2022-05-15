import { useEffect, useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import ToggleTheme from 'components/ui/theme/Header/ToggleTheme';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div
      className={cx({
        'items-center hidden lg:flex': desktop,
        'p-12 flex flex-col': !desktop,
      })}
    >
      <Link href="/#about" scroll={false}>
        <a className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black">About</a>
      </Link>
      <Link href="/#projects" scroll={false}>
        <a className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black">Projects</a>
      </Link>
      <Link href="/#contact" scroll={false}>
        <a className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black">Contact</a>
      </Link>
      {hasMounted && <ToggleTheme />}
    </div>
  );
};

export default NavbarLinks;
