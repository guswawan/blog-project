const cacheBust = () => `_=${Date.now()}`;

const NOTION_API_BASE_URL = import.meta.env.VITE_NOTION_API_BASE_URL;
const NOTION_BLOG_TABLE_ID = import.meta.env.VITE_NOTION_BLOG_TABLE_ID;

export const getBlogList = async () => {
  return await fetch(
    `${NOTION_API_BASE_URL}/table/${NOTION_BLOG_TABLE_ID}?${cacheBust()}`
  )
    .then((res) => res.json())
    .then((result) => result);
};

export const getBlogDetail = async (id) => {
  return await fetch(`${NOTION_API_BASE_URL}/page/${id}?${cacheBust()}`)
    .then((res) => res.json())
    .then((result) => result);
};
