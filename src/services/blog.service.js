const cacheBust = () => `_=${Date.now()}`;

export const getBlogList = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/2f7b5e7be858816c9b0ae834939ce9b8?${cacheBust()}`,
  )
    .then((res) => res.json())
    .then((result) => result);
};

export const getBlogDetail = async (id) => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/page/${id}?${cacheBust()}`,
  )
    .then((res) => res.json())
    .then((result) => result);
};
