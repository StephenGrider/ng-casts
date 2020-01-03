const axios = require('axios');
const WikipediaSearch = require('./wikipedia-search');

const run = async () => {
  const wikiSearch = new WikipediaSearch(axios.create({}));

  const results = await wikiSearch.search('space');

  console.log(results);
};

run();
