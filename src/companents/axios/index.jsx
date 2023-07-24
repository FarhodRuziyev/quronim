import axios from "axios";

export const instance = axios.create({
  baseURL: "http://api.alquran.cloud/v1/",
  timeout: 100000,
});

export const NomozVaqti = axios.create({
  baseURL: "https://islomapi.uz/api/present/",
  timeout: 100000,
});

export const Suralar = axios.create({
  baseURL: "https://quranenc.com/api/v1/translation/sura",
});