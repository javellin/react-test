import axios from "axios";

const favoriteBooksUrl = "/api/books/favorites";

export default {
  fetchFavorites: async () => {
    const response = await axios.get(favoriteBooksUrl);
    return response.data;
  }
};
