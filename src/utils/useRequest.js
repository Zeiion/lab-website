import { useState, useEffect } from 'react';

export const useRequest = (fn, dependencies, mapper = (data) => data) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  let shouldReturnResults = false;
  const request = () => {
    setLoading(true);
    fn()
      .then((res) => {
        shouldReturnResults = res.url.includes('list'); // 列表返回 results
        return res.json();
      })
      .then((json) => {
        setData(mapper(shouldReturnResults ? json.results : json));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    request();
  }, dependencies);

  return {
    /** 数据 */
    data,
    /** 是否正在加载 */
    loading,
    /** 请求的方法 */
    request,
  };
};
