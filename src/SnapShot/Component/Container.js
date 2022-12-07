import { useContext, useEffect } from "react";
import { PhotoContext } from "../content/PhotoContext";
import Loader from "./Loader";
import Gallery from "./Gallery";

function Container({ searchTerm }) {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);
  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
}

export default Container;
