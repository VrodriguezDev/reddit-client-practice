import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const useFetchWithSWR = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return [ data, error ];
};

export default useFetchWithSWR;
