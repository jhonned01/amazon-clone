import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProducFeed from "../components/ProducFeed";
export default function Home({ products }) {
  console.log("====================================");
  console.log(products);
  console.log("====================================");
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className=" max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Produc */}

        <ProducFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return { props: { products } };
}

// GET >> https://fakestoreapi.com/products
