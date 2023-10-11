/* eslint-disable prefer-promise-reject-errors */
const baseUrl = `http://34.134.29.128:8081/v1`




async function client(
  endpoint,
  { apiURL = baseUrl, data, token, headers: customHeaders, ...customConfig } = {}
) {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (data) {
    headers['Content-Type'] = 'application/json';
  }
  const config = {
    method: data ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customHeaders,
    },
  };
  if (data) {
    config.body = JSON.stringify(data);
  }
  try {
    const response = await fetch(`${apiURL}/${endpoint}`, config);

    if (response.status === 401) {
      // await logout();
      // Handle navigation differently in React Native
      // Example: navigation.navigate('Login');
      throw new Error('Please re-authenticate.');
    }
    if (response.status === 204) {
      return 'Delete successfully';
    }

    const responseData = await response.json();
    //// console.log('response in fecth', responseData);
    if (response.ok) {
      return responseData;
    }

    throw responseData;
  } catch (error) {
    console.log('error', error);
    const obj = {
      ...error,
      message: error?.message ?? 'Something went wrong.',
    }
    return Promise.reject(obj);
  }
}

export { client };