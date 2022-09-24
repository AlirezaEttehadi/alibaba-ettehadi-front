import { useRouter } from "next/router";

import axios from "axios";
import CountryPage from "../../components/CountryPage";

export default function Country({ country }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>...loading</div>;
  }
  return <CountryPage country={country} />;
}

export async function getStaticProps({ params }) {
  let country = {};
  try {
    country =
      (await axios.get(`https://restcountries.com/v2/name/${params.country}`))
        ?.data?.[0] ||
      (await axios.get(`https://restcountries.com/v2/alpha/${params.country}`))
        ?.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      country,
    },
  };
}

export async function getStaticPaths() {
  let countries = [];
  try {
    const response = await axios.get("https://restcountries.com/v2/all");
    countries = await response?.data;
  } catch (error) {
    console.log(error);
  }
  const paths = countries?.map((country) => ({
    params: { country: country.name },
  }));
  return { paths, fallback: true };
}
