import React from "react";
import Link from "next/link";

import Slant from "../../svg/slantgray";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  return (
    <div className="relative py-16 bg-gray-100">
      <Slant />
      <div className="grid max-w-5xl grid-cols-3 mx-auto ">
        <div className="relative flex items-center max-w-sm">
          <h2 className="max-w-xl font-serif text-4xl font-light text-primary-800">
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
          <Link href="#">
            <a>
              <button className="mt-8 border rounded-md border-primary-800 text-primary-800 hover:bg-gray-300">
                <p className="block m-4 text-xl font-light">
                  How {referToWe ? "We" : "I"} Execute
                </p>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
