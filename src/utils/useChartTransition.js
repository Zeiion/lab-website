import { useEffect, useState, useMemo, useRef } from 'react';
/**
 * change data from 0 to real value
 * @param {*} data
 * @param {*} data.labels
 * @param {*} data.datasets
 * @param {*} data.datasets.data
 * @param {*} interval
 */
export const useChartTransition = (
  data,
  interval,
  dependency = [],
  shouldRender = false
) => {
  const len = data.labels.length;

  const [dataState, setDataState] = useState({
    ...data,
    datasets: data.datasets.map((dataset, i) => {
      return {
        ...dataset,
        data: [],
      };
    }),
  });
  useEffect(() => {
    if (!shouldRender) {
      setDataState({
        ...data,
        datasets: data.datasets.map((dataset, i) => {
          return {
            ...dataset,
            data: [],
          };
        }),
      });
      return;
    }
    let cnt = 0;
    setDataState({
      ...data,
      datasets: data.datasets.map((dataset, i) => {
        return {
          ...dataset,
          data: [],
        };
      }),
    });
    let timer = setInterval(() => {
      cnt++;
      if (cnt > len) {
        clearInterval(timer);
        return;
      }
      setDataState({
        ...data,
        datasets: data.datasets.map((dataset, i) => {
          const newData = data.datasets[i].data.slice(0, cnt);
          return {
            ...dataset,
            data: newData,
          };
        }),
      });
    }, interval);
    return () => {
      clearInterval(timer);
    };
  }, dependency);
  return {
    dataState,
  };
};
