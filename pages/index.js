import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbaramazon from '../components/Navbaramazon';
import ProductFeed from '../components/ProductFeed';
import { getSession } from 'next-auth/react';
import Banner from '../components/Bannert';
import Footer from "../components/Footer"
import { setAllProducts } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProducts({ allProducts: products }));
  }, [products]);

  

  // console.log(products)
 
  return (
    <>
      <div>
        <Head>
          <title>Amazon 2.0</title>
          <meta name="description" content="amazon shopping website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbaramazon />
        <div className="overflow-hidden mx-auto  bg-gray-200/80">
          <main className="max-w-screen-2xl mx-auto  ">
            <Banner />
            <ProductFeed products={products} />
          </main>
        </div>
        <Footer/>
      </div>
    </>
  )
}



export async function getServerSideProps(context) {
  const session = await getSession(context)
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )

  return {
    props: {
      products,
      session,
    },
  };
}


