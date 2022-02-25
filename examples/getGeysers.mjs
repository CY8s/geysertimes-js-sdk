import client from "../index.mjs";

const geysers = await client.getGeysers();

console.log(geysers);
