import Head from "next/head";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Feed from "@/components/Feed";
import requests from "@/utils/request";
export default function Home({ results }) {
  return (
    <>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header width={200} height={100} />

      <Nav />

      <Feed results={results} />
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
