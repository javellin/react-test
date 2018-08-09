import axios from "axios";

const authorsUrl = "/api/authors";

function getUrl(searchText, page, size) {
  return (
    authorsUrl +
    `?page=${page}&size=${size}${
      searchText && searchText !== "" ? `&name=${searchText}` : ""
    }`
  );
}

export default {
  fetch: async (searchText, page, size) => {
    const response = await axios.get(getUrl(searchText, page, size));
    return response.data;
  },
  save: async author => {
    return axios.post(authorsUrl, author);
  },
  delete: async id => {
    return await axios.delete(`${authorsUrl}/${id}`);
  }
};
