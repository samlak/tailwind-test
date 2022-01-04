import { useState } from "react";
import Preview from "./Preview";

function Image ({medium, alt, landscape, photographer, url}) {
  const [onHover, setOnHover] = useState(false);
  const [onPreview, setOnPreview] = useState(false);

  return (
    <>
      <div className="xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-full p-5 md:h-72 sm:h-96 ">
        <div className="w-full h-full relative">
          <div 
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            className="border border-blue-100 shadow-md rounded-md p-0 w-full h-full absolute object-fill"
          >
            <img src={medium} className="rounded-md w-full h-full" alt={alt} />
          </div>
    
          <div className={`${onHover ? 'flex' : 'hidden'}  absolute rounded-md w-full h-full justify-center items-center bg-blue-300/80`}> 
            <button 
              onClick={() => setOnPreview(true)} 
              className="bg-blue-600 font-bold text-white px-5 py-2 rounded-md cursor-pointer">Preview</button>
          </div>
        </div>
      </div>

      {onPreview ? 
        <Preview landscape={landscape} alt={alt} photographer={photographer} url={url} setOnPreview={setOnPreview}/> 
        : null }
    </>
  );
}

export default Image;