import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduc from "../components/CheckoutProduc";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

const checkout = () => {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="http://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length === 0
                ? "your Amazaon Basket is empty"
                : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduc
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div></div>
      </main>
    </div>
  );
};

export default checkout;
