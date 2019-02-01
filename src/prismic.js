import Prismic from 'prismic-javascript';

const prismic = {
  init() {
    const apiEndpoint = process.env.API_END_POINT;
    const apiToken = process.env.API_TOKEN;

    // An empty query will return all the documents
    Prismic.getApi(apiEndpoint, { accessToken: apiToken }).then(api => api.query('')).then((response) => {
      console.log('Documents: ', response.results);
    }, (err) => {
      console.log('Something went wrong: ', err);
    });
  },
};

export default prismic;
