import React, { useEffect, useRef } from 'react';
import Jazzicon from '@metamask/jazzicon';

const JazziconComponent = ({ ethereumAddress, diameter }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Generate the Jazzicon based on the Ethereum address
    const seed = parseInt(ethereumAddress.slice(2, 10), 16);
    const jazzicon = Jazzicon(diameter, seed);

    // Append the Jazzicon to the container
    container.appendChild(jazzicon);

    return () => {
      // Cleanup: Remove the Jazzicon when the component unmounts
      container.removeChild(jazzicon);
    };
  }, [ethereumAddress, diameter]);

  return <div ref={containerRef}></div>;
};

export default JazziconComponent;
