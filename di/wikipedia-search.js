module.exports = class WikipediaSearch {
  constructor(axios) {
    this.axios = axios;
  }

  async search(term) {
    const res = await this.axios.get(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${term}`
    );

    return res.data.query.search;
  }
};
