import { useEffect, useState } from "react";
import "./App.css";
import ImageGallery from "./ImageGallery/ImageGallery";
import { fetchImages } from "../services/api";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import SearchBar from "./SearchBar/SearchBar";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleChangeQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalPages(0);
  };

  return (
    <div>
      <SearchBar onChangeQuery={handleChangeQuery} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {isError && <ErrorMessage />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
    </div>
  );
};

export default App;
