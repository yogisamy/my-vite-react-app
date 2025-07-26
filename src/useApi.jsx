import { useCallback, useState } from 'react';

import axios from 'axios';

export function useApi() {
  const [response, setResponse] = useState(null); // { data, error, status }
  const [loading, setLoading] = useState(false);

  const callApi = useCallback(async ({ url, method = 'GET', params = {}, data = {}, headers = {} }) => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await axios({
        url,
        method,
        params,
        data,
        headers,
      });

      setResponse({
        data: res.data,
        status: res.status,
      });
    } catch (error) {
      setResponse({
        error: error.response?.data || error.message,
        status: error.response?.status || 500,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  return [response, callApi, loading];
}