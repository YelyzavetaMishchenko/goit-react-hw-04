import axios from "axios";

const ACCESS_KEY = "raSlKwlo5aYL0ZLBfWvji8tdv9o9WopACyFLS2tG61A";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get("search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data;
};
