'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleTheme from 'components/ui/theme/Header/ToggleTheme';
import { cn } from 'lib/utils';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div
      className={cn({
        'items-center hidden lg:flex': desktop,
        'p-12 flex flex-col': !desktop,
      })}
    >
      <Link
        href={`${pathname}#about`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:mix-blend-difference"
        scroll
      >
        About
      </Link>
      <Link
        href={`${pathname}#projects`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:mix-blend-difference"
        scroll
      >
        Projects
      </Link>
      <Link
        href={`${pathname}#contact`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:mix-blend-difference"
        scroll
      >
        Contact
      </Link>
      {hasMounted && <ToggleTheme />}
    </div>
  );
};

export default NavbarLinks;
