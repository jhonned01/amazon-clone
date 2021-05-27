import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, remo, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduc = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
  rating,
}) => {
  const dispatch = useDispatch();

  const product = {
    id,
    title,
    price,
    hasPrime,
    description,
    category,
    image,
    rating,
  };
  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  const removeItemToBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* midd seccion */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="USD" />
        {hasPrime && (
          <div className="flex items-center space-x-2 mt-5">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className=" flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button ">
          Add to Basket
        </button>
        <button onClick={removeItemToBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduc;
