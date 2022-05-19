import fetch from 'node-fetch';

/**
 *
 * @param {string} url - A string representing the URL for fetching.
 * @param {object} [options] - Options for the HTTP(S) request.
 * See {@link https://www.npmjs.com/package/node-fetch#api} for default properties.
 * @return {Promise<object>} Despite the method being named json(), the result is not JSON.
 * It is the result of taking JSON as input and parsing it to produce a JavaScript object.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Response/json} for details.
 */
async function jsFetch(url, options) {
  return await fetch(url, options).then(r => r.json());
}

export default jsFetch;
