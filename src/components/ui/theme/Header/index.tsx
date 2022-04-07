import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Overlay, Wrapper } from './styles';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <Wrapper>
      <Overlay sidebar={sidebar} onClick={() => setSidebar(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={setSidebar} />
      <Sidebar sidebar={sidebar} toggle={() => setSidebar(!sidebar)} />
    </Wrapper>
  );
};

export default Header;
