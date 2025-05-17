'use client';

import NavbarLinks from 'components/ui/theme/Header/NavbarLinks';
import { cn } from 'lib/utils';

type SideBarProps = {
  sidebar?: boolean;
  toggle: () => void;
};

const Sidebar = ({ sidebar, toggle }: SideBarProps) => (
  <div
    className={cn(
      'fixed z-10 overflow-auto top-0 -right-[275px] w-0 h-full bg-white dark:bg-brand-primary sidebar-transition block lg:hidden',
      {
        'w-[75%] md:w-[40%] lg:w-1/5 opacity-100 right-0': sidebar,
        'opacity-0': !sidebar,
      },
    )}
    onClick={toggle}
  >
    <NavbarLinks />
  </div>
);

export default Sidebar;
