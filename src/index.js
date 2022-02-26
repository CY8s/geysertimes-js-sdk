import "isomorphic-fetch";

const baseURL = "https://www.geysertimes.org/api/v5";

const getData = async (pathSegment) => {
  const request = await fetch(`${baseURL}/${pathSegment}`);
  const data = await request.json();
  return data;
};

export const getGeysers = async () => {
  const data = await getData("geysers");
  return data.geysers;
};

export const getPredictions = async (args = {}) => {
  const { userIDs = "44,208" } = args;
  const data = await getData(`predictions_latest?userID=${userIDs}`);
  return data.predictions;
};

const client = Object.freeze({
  getGeysers,
  getPredictions,
  sayHello,
});

export default client;
