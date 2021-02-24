import { useState, useEffect } from "react";
import youtube from "../apis/Youtube";

const useVideos = (defaultSerachTerm) => {

  useEffect(() => {
    search(defaultSerachTerm);
  }, [defaultSerachTerm]);

  const [videos, setVideos] = useState([]);
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return [videos,search]
};

export default useVideos;
