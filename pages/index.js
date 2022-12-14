import Head from "next/head";

import axios from "axios";

import HomePage from "../components/HomePage";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <HomePage countries={countries} />
    </>
  );
}

export async function getStaticProps() {
  let countries = [];
  try {
    const response = await axios.get("https://restcountries.com/v2/all");
    countries = await response?.data;
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      countries,
    },
  };
}
