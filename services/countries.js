import axios from "axios";

export const filterCountriesByRegion = async (region) => {
  const { data } = await axios.get(
    `https://restcountries.com/v2/region/${region}`
  );
  return data;
};

export const filterCountriesBySearch = async (search) => {
  const { data } = await axios.get(
    `https://restcountries.com/v2/name/${search}`
  );
  return data;
};

export const getAllCountries = async () => {
  const { data } = await axios.get(`https://restcountries.com/v2/all/`);
  return data;
};
