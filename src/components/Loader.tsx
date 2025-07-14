import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500); // Loader disappears after 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null; // Remove loader from DOM

  return (
    <div className="loader-container">
      <div className="spinner">
        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>
      </div>
    </div>
  );
};

export default Loader;

// import React from 'react';
// import './Loader.css';

// const Loader = () => {
//   return (
//     <div className="loader-container">
//       <div className="spinner">
//         <div className="dot dot1"></div>
//         <div className="dot dot2"></div>
//         <div className="dot dot3"></div>
//       </div>
//     </div>
//   );
// };

// export default Loader;
