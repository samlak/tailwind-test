import { useEffect, useState } from "react";
import axiosRequest from "./axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageBox from "./components/ImageBox";
import Search from "./components/Search";

function App() {
  const [ imageData, setImageData ] = useState([]);

  useEffect(() => {
    return axiosRequest('house', setImageData);
  }, []);
  
  return (
    <div className="bg-blue-50 overflow-hidden">
      <Header />
      <Search setImageData={setImageData}/>
      <ImageBox imageData={imageData} />
      <Footer />
    </div>
  )
}

export default App;
