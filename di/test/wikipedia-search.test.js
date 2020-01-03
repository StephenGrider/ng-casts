const WikipediaSearch = require('../wikipedia-search');

const run = async () => {
  const fakeAxios = {
    get() {
      return new Promise((resolve, reject) => {
        resolve({
          data: {
            query: {
              search: [
                { title: 'Space' },
                { title: 'Space Station' },
                { title: 'Space' },
                { title: 'Space Station' },
                { title: 'Space' },
                { title: 'Space Station' },
                { title: 'Space' },
                { title: 'Space Station' },
                { title: 'Space' },
                { title: 'Space Station' }
              ]
            }
          }
        });
      });
    }
  };

  const wikiSearch = new WikipediaSearch(fakeAxios);

  const results = await wikiSearch.search('space');

  if (results.length !== 10) {
    throw new Error('Failed to fetch the correct number of results');
  }
};

run();
