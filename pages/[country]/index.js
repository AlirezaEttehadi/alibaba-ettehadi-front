import axios from "axios";
import CountryPage from "../../components/CountryPage";

export default function Country({ country = {} }) {
  return <CountryPage country={country} />;
}

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    `https://restcountries.com/v2/name/${params.country}`
  );
  const country = await response?.data?.[0];
  return {
    props: {
      country,
    },
  };
}
