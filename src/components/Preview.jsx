function Preview ({landscape, alt, photographer, url, setOnPreview}) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setOnPreview(false)}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
  
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle  sm:w-4/5">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="relative w-full h-full">
              <p 
                onClick={() => setOnPreview(false)}
                className="absolute font-bold text-white text-2xl cursor-pointer top-2 right-4">
                &#10005;
              </p>
              <img src={landscape} className="rounded-md w-full h-full " alt={alt} />
            </div>
            <div className="flex justify-between items-center pt-5">
              <p className="font-bold ">By {photographer}</p>
              <a href={url} className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-1.5 font-bold text-white" target="_blank" rel="noreferrer" >Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Preview;