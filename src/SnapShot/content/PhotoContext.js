import { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../Api/Api";

export const PhotoContext = createContext();
function PhotoContextProvider(prop) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((res) => {
        setImages(res.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Lỗi: ", error);
      });
  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {prop.children}
    </PhotoContext.Provider>
  );
}

export default PhotoContextProvider;
