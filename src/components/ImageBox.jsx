import Image from "./Image";
import Skeleton from "./Skeleton";

function ImageBox ({imageData}) {


  const SkeletonGroup = () => {
    let skeletonList = [];
    for (let index = 0; index < 4; index++) {
      skeletonList.push( <Skeleton key={index} /> )
    }
    return skeletonList;
  }
    
  return (
    <div className="flex mt-8 mx-8 mb-10 justify-center w-full flex-wrap">
      <div className="flex justify-items-start  w-full flex-wrap">
        {Array.isArray(imageData) && imageData.length === 0 ? 
          <SkeletonGroup /> : 
        Array.isArray(imageData) && imageData.length > 0 ?
          (imageData.map(({medium, alt, landscape, photographer, url}) => 
            <Image 
              medium={medium} 
              landscape={landscape} 
              photographer={photographer} 
              url={url} 
              alt={alt} 
              key={alt} 
            />
          )) :
        <p className="font-bold mx-auto text-blue-700 text-2xl">{imageData}</p>}
      </div>
    </div>
  )
}

export default ImageBox;