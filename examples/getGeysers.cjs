const Client = require("../dist/cjs").default;

const client = new Client();

client.getGeysers().then((geysers) => console.log(geysers));
