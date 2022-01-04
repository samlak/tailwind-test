import axios from "axios";

function axiosRequest (query, updateState) {
  console.log("Hii")
  axios(
    {
      method: 'GET',
      headers: { 'Authorization': '563492ad6f9170000100000188f6b3cb2fe94b25b7288729fc51a1b0' },
      url: `https://api.pexels.com/v1/search?query=${query}`,
    }
  ).then((data) => {
    let newData = data.data.photos.map((photo) => {
      return {
        photographer: photo.photographer,
        url: photo.url,
        alt: photo.alt,
        medium: photo.src.medium,
        landscape: photo.src.landscape,
      }
    });

    if(data.data.photos.length === 0) {
      newData = "No images found"
    }

    return updateState(newData);
  })
}

export default axiosRequest;