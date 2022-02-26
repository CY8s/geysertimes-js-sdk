import "isomorphic-fetch";

export const getGeysers = async () => {
  const request = await fetch("https://www.geysertimes.org/api/v5/geysers");
  const data = await request.json();
  return data.geysers;
};

const client = Object.freeze({
  getGeysers,
});

export default client;
