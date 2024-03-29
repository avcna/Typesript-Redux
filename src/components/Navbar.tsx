import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getTotal, selectCartTotalQuantity, setOpenCart } from "../app/CartSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(setOpenCart(true));
  };
  const selectQty = useSelector(selectCartTotalQuantity);
  const [isScrolled, setIsScrolled] = useState(false);
  const onScrolling = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScrolling);
    return () => {
      window.removeEventListener("scroll", onScrolling);
    };
    
  }, []);
  return (
    <nav
      className={`px-[24px] py-[16px] ${
        isScrolled ? "bg-[#ffffff96] fixed" : "absolute bg-transparent"
      }  top-0 z-30 w-full`}
    >
      <div className="flex justify-between relative">
        <img
          src={logo}
          alt=""
          className={`w-[100px] ${isScrolled && "filter brightness-0"}`}
        />
        <div className="flex gap-x-[8px]">
          <HeartIcon className={`${isScrolled && "text-black"} icon-style`} />
          <MagnifyingGlassIcon
            className={`${isScrolled && "text-black"} icon-style`}
          />
          <ShoppingBagIcon
            className={`${isScrolled && "text-black"} icon-style`}
            onClick={onCartToggle}
          />
          <div
            className={`rounded-[100%] ${
              isScrolled ? "bg-black text-white" : "bg-white"
            } absolute flex justify-center items-center w-[16px] h-[16px] right-[8px] bottom-1 text-[10px]`}
          >
            {selectQty}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
