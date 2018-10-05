import deepmerge from 'deepmerge';

const parseQuery = query => Object.entries(query).map(([key, val]) => `${key}=${val}`).join('&');

const getApiEndpoint = (endpoint, query) => {
  let apiEndpoint = `/api/${endpoint}`.replace(/\/+/g, '/');

  const queryString = parseQuery(query);
  if (queryString) apiEndpoint += '?' + queryString;

  return apiEndpoint;
};

const createCustomResponse = async (res) => ({
  status: res.status,
  data: await res.json(),
  originalResponse: res,
});

class ApiService {
  async post (endpoint, data = {}, query = {}, opts = {}) {
    const res = await fetch(getApiEndpoint(endpoint, query), deepmerge({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    }, opts));

    return await createCustomResponse(res);
  }

  async get (endpoint, query = {}, opts = {}) {
    const res = await fetch(getApiEndpoint(endpoint, query), deepmerge({
      method: 'GET',
    }, opts));
    return await createCustomResponse(res);
  }
}

export default new ApiService();
