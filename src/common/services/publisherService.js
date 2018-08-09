import axios from "axios";

const publishersUrl = "/api/publishers";

function getUrl(searchText, page, size) {
  return (
    publishersUrl +
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
  save: async publisher => {
    return axios.post(publishersUrl, publisher);
  },
  delete: async id => {
    return await axios.delete(`${publishersUrl}/${id}`);
  }
};
