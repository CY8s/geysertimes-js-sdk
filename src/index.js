import "isomorphic-fetch";

/**
 *
 */
class Client {
  #baseURL = null;
  #geysers = null;

  /**
   * Constructor that creates a GeyserTimes API Client
   *
   * @param {string} config.baseURL - Base URL for Geysertimes API
   */
  constructor(config = {}) {
    const { baseURL = "https://www.geysertimes.org/api/v5" } = config;
    this.#baseURL = baseURL;
  }

  async #getData(pathSegment) {
    const request = await fetch(`${this.#baseURL}/${pathSegment}`);
    const data = await request.json();
    return data;
  }

  /**
   *
   * @param {Object} args - Get Geyser Arguments
   * @param {boolean} args.forceRefresh - Force refresh of geyser list
   * @returns {Object[]} Array of Objects containing geyser data.
   */
  async getGeysers(args = {}) {
    const { forceRefresh = false } = args;

    if (forceRefresh || !this.#geysers) {
      const data = await this.#getData("geysers");
      this.#geysers = data.geysers || null;
    }
    return this.#geysers;
  }

  /**
   *
   * @param {Object} args - Get Prediction Arguments
   * @param {string} args.userIDs - Comma-delimited list of userIDs for prediction sources
   * @returns {Object[]} Array of Objects containing geyser data.
   */
  async getPredictions(args = {}) {
    const { userIDs = "44,208" } = args;
    const data = await this.#getData(`predictions_latest?userID=${userIDs}`);
    return data.predictions;
  }
}

export default Client;
