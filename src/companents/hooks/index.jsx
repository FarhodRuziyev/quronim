import { useQuery } from "react-query";
import { NomozVaqti, Suralar, instance } from "../axios";



export const useGetData = (keys, url, options) => {
  return useQuery(keys, () => instance.get(url).then((res) => res?.data), {
    ...options,
  });
};

export const useGetNomoz = (keys, url, options) => {
  return useQuery(keys, () => NomozVaqti.get(url).then((res) => res?.data), {
    ...options,
  });
};

export const useGetDetel = (keys, url, options) => {
  return useQuery(keys, () => Suralar.get(url).then((res) => res?.data), {
    ...options,
  });
};