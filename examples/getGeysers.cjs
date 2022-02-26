//import client from "../index.mjs";
const client = require("../dist/cjs").default;

//console.log(client);

client.getGeysers().then((geysers) => console.log(geysers));
