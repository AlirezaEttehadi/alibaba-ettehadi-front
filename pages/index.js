import axios from "axios";

import { countries } from "../countries";
import HomePage from "../components/HomePage";

export default function Home({ countries }) {
  return <HomePage countries={countries} />;
}

export async function getServerSideProps() {
  // const { data: countries } = await axios.get(
  //   "https://restcountries.com/v2/all"
  // );
  return {
    props: {
      countries,
    },
  };
}
