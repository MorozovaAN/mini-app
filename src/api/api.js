export const getItems = async (searchValue, sortValue) => {
  const res = await fetch(
    `https://99357.web.hosting-russia.ru/search/?search_query=${searchValue}&order_by=${sortValue}`
  );
  return await res.json();
};
