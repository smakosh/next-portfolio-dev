import Link from 'next/link';
import NavbarLinks from 'components/ui/theme/Header/NavbarLinks';

const Navbar = () => (
  <div className="container flex items-center justify-between p-6">
    <Link href="/" passHref>
      <a className="typography dark:text-white text-black">John Doe</a>
    </Link>
    <NavbarLinks desktop />
  </div>
);

export default Navbar;
