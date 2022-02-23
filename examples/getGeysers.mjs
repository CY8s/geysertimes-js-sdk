import client, { getGeysers } from "../index.mjs";

const geysers = await client.getGeysers();

console.log(geysers);
