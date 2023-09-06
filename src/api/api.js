import {baseURL} from "./baseURL";

export const getItems = async (searchValue, sortValue) => {
  const res = await fetch(
    `${baseURL}/search/?search_query=${searchValue}&order_by=${sortValue}`
  );
  return await res.json();
};