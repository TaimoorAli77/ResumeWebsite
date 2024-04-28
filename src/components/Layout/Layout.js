import React, { useEffect, useState } from 'react';
import Welcome from './Welcome';
import Home from '../Home/Home';
const Layout = () => {
  const [showCv, setShowCv] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowCv(true)
    }, 3000);

  }, [])
  return (
    <>
      <Welcome />
      {showCv && <>
        <Home />

      </>}


    </>
  );
}

export default Layout;
