import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
   <>
   <Head>
     <title>Hulu 2.0</title>
   </Head>
   {/* Header */}
    <Header/>
   {/* Nav */}
   <Nav/>

   {/* Results */}
   <Result results={results} />
   </>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return{
    props:{
      results:request.results,

    }
  }
}