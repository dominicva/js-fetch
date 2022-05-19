# @notthedom/js-fetch

## Maybe the smallest module of all time 🥇

> Wrapper around node-fetch that appends `.then(res => res.json())` for you

### Example usage

```javascript
import jsFetch from '@notthedom/js-fetch';

const URL = 'https://api.someone/endpoint';
const AUTH = {
  headers: {
    authorization: `Bearer ${mySecretBearerToken}`,
  },
};

// no more repetitive typing of .then(res => res.json()) or equivalent
const data = await jsFetch(URL, AUTH);

// data is now ready to consume as a beautiful JS object
```

### Note on error handling

- The module appends `.then()` but no `.catch()` to a request

- Assumed usage with async/await

- Therefore left it to the user to implement typical try/catch, or their preferred error handling strategy.
