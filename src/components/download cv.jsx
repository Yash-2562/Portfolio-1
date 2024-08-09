import React from 'react';


const DownloadCVButton = () => {
 

  return (
    <a href='/Yash-cv.pdf' className="p-3 w-full rounded-xl mr-4 border-emerald-300 border hover:bg-gradient-to-r from-orange-500 to-pink-500 text-white cursor-pointer" download="YASH_CV.pdf" >Download CV</a>
  );
};

export default DownloadCVButton;
