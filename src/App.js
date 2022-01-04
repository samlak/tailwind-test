import { useEffect, useState } from "react";
import axiosRequest from "./axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageBox from "./components/ImageBox";
import Search from "./components/Search";

function App() {
  const [ imageData, setImageData ] = useState([]);

  useEffect(() => {
    return axiosRequest('laptop', setImageData);
  }, []);
  
  return (
    <div className="bg-blue-50">
      <Header />
      <Search />
      <ImageBox imageData={imageData} setImageData={setImageData} />
      <Footer />
    </div>
  )
}

export default App;
