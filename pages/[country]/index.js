import { useRouter } from "next/router";
import Head from "next/head";

import axios from "axios";

import CountryPage from "../../components/CountryPage";
import CircularIndeterminate from "../../components/CircularIndeterminate";

export default function Country({ country }) {
  const router = useRouter();
  if (router.isFallback) {
    return <CircularIndeterminate />;
  }
  return (
    <>
      <Head>
        <title>{country.name}</title>
      </Head>
      <CountryPage country={country} />
    </>
  );
}

export async function getStaticProps({ params }) {
  let country;
  try {
    country =
      (await axios.get(`https://restcountries.com/v2/name/${params.country}`))
        ?.data?.[0] ||
      (await axios.get(`https://restcountries.com/v2/alpha/${params.country}`))
        ?.data;
  } catch (error) {
    console.log(error);
  }
  if (!country) {
    return {
      notFound: true,
    };
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
