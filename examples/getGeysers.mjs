import client from "../src/index.js";

const geysers = await client.getGeysers();

console.log(geysers);
