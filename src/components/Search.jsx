import { useState } from "react";
import axiosRequest from "../axios";
import searchIcon from "../assets/search.svg";

function Search ({setImageData}) {
  const [searchQuery, setSearchQuery] = useState('');

  const inputUpdate = (event) => {
    return setSearchQuery(event.target.value);
  }

  const searchImage = () => {
    return axiosRequest(searchQuery, setImageData);
  }

  return (
    <div className="flex justify-center mt-24">
      <input onChange={inputUpdate} className="w-1/2 px-7 h-14 border border-blue-400 rounded-tl-3xl rounded-bl-3xl mb-12" type="search" name="search" placeholder="Search image" />
      <button onClick={searchImage} className="h-14 border border-blue-400 hover:border-blue-600 bg-blue-400 hover:bg-blue-600 mb-12 rounded-tr-3xl rounded-br-3xl text-white px-6 py-4">
        <img src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  )
}

export default Search;  