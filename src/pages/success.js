import React from "react";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
const success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen ">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1>Thank you , your order has been confimed !</h1>
          </div>
          <p>
            Thank you for shopping with us. we will send a confirmation que
            muchas gracias puto
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my order
          </button>
        </div>
      </main>
    </div>
  );
};

export default success;
