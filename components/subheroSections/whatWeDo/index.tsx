import React from "react";
import Link from "next/link";

import Slant from "../../svg/slantgray";

type Props = {
  res: any;
  referToWe: boolean;
  setOpen: any;
};

export default function index({ res, referToWe, setOpen }: Props) {
  const handleClick = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="relative px-4 py-16 bg-gray-100">
      <Slant />
      <div className="grid max-w-5xl grid-cols-1 mx-auto md:grid-cols-3 ">
        <div className="relative flex items-center max-w-sm">
          <h2 className="max-w-xl font-serif text-3xl font-light md:text-4xl text-primary-800">
            Who {referToWe ? "We" : "I"} Serve
          </h2>
        </div>

        <div className="col-span-2">
          <p className="py-2 text-lg font-light text-gray-700">
            {referToWe ? "We" : "I"} help high-net-worth families, business
            owners, and late career executives ensure that their financial
            future is secure.
          </p>
          <p className="py-2 text-lg font-light text-gray-700">
            {referToWe ? "Our" : "My"} practice is founded on the core tennents
            of integrity and trust. Every decision {referToWe ? "we" : "I"} make
            on your behalf is to help you reach your long-term goals.
          </p>
          <p className="py-2 text-lg font-light text-gray-700">
            At every step in your journey, {referToWe ? "we" : "I"} want you to
            know exactly where you stand so that as your goals change your
            financial plan can adjust seemlessly.
          </p>
          <a onClick={(e) => handleClick(e)}>
            <button className="mt-8 border rounded-md border-primary-800 text-primary-800 hover:bg-gray-200">
              <p className="block m-4 text-xl font-light">
                How {referToWe ? "We" : "I"} Execute
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
