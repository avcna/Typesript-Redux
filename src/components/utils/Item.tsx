import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { TItems } from "../Data/dataType";

interface IItems {
  data: TItems;
  addToCart: React.MouseEventHandler<SVGSVGElement>;
}

const Item: React.FC<IItems> = ({ data, addToCart }) => {
  const { id, color, shadow, title, text, img, btn, rating, price } = data;
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid justify-items-center rounded-[24px] h-[350px] py-[24px] hover:scale-105 hover:transition-colors px-[12px]`}
      >
        <div className="">
          <div className="flex flex-col order-last">
            <h1 className="text-xl font-medium text-slate-200 lg:text-lg md:text-base filter drop-shadow">
              {title}
            </h1>
            <p className="text-base font-normal text-slate-200 filter drop-shadow md:text-sm">
              {text}
            </p>
            <div className="flex flex-col gap-2 md:text-[12px]">
              <div className="flex gap-2">
                <p className="bg-[#ffffffd2] w-fit p-[4px] rounded-md">
                  Rp {price}
                </p>
                <p className="text-[#ffb429] p-[4px] w-fit rounded-md bg-[#ffffffd2]">
                  <StarIcon className="icon-style text-[#ffb429] inline" />
                  {rating}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex justify-center bg-white w-fit p-[4px] rounded-md"
                >
                  <ShoppingBagIcon
                    className="icon-style text-slate-900 "
                    onClick={addToCart}
                  />
                </button>
                <button
                  type="button"
                  className="flex justify-center bg-white w-fit p-[4px] rounded-md"
                >
                  {btn}
                </button>
              </div>
            </div>
          </div>

          <div>
            <img
              src={img}
              alt="img/item-img"
              className="w-[230px] hover:rotate-[10deg] hover:scale-105 hover:transition-colors mt-8 sm:scale-90 xsm:scale-80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
