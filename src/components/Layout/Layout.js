import React, { useEffect, useState } from 'react';
import Welcome from './Welcome';
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
      Welcome Boys
      </>}


    </>
  );
}

export default Layout;
