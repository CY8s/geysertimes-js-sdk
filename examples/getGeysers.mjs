import Client from "../dist/esm/index.js";

const client = new Client();

const geysers = await client.getGeysers();

console.log(geysers);
