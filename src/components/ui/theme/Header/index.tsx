'use client';
import cx from 'classnames';
import { useState } from 'react';
import Hamburger from './Hamburger';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="w-full bg-transparent">
      <button
        className={cx('bg-black/70 w-full h-full transition-all duration-300 ease-in-out', {
          'block z-10': sidebar,
          hidden: !sidebar,
        })}
        onClick={() => setSidebar(!sidebar)}
      />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={setSidebar} />
      <Sidebar sidebar={sidebar} toggle={() => setSidebar(!sidebar)} />
    </div>
  );
};

export default Header;
