import "isomorphic-fetch";

class Client {
  #baseURL = null;
  #geysers = null;

  constructor(args = {}) {
    const { baseURL = "https://www.geysertimes.org/api/v5" } = args;
    this.#baseURL = baseURL;
  }

  async #getData(pathSegment) {
    const request = await fetch(`${this.#baseURL}/${pathSegment}`);
    const data = await request.json();
    return data;
  }

  async getGeysers(args = {}) {
    const { forceRefresh = false } = args;

    if (forceRefresh || !this.#geysers) {
      const data = await this.#getData("geysers");
      this.#geysers = data.geysers || null;
    }
    return this.#geysers;
  }

  async getPredictions(args = {}) {
    const { userIDs = "44,208" } = args;
    const data = await this.#getData(`predictions_latest?userID=${userIDs}`);
    return data.predictions;
  }
}

export default Client;
