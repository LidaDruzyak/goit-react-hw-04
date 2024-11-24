import axios from "axios";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=NLdGMLUgLi5kZY2EcIvdU9eyB93EwQv3gICStBXzFAo&query=${query}&page=${page}&per_page=12`
  );
  return response.data;
};
// return response.data.results;
