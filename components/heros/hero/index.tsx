import React from "react";
import Image from "next/image";
import Link from "next/link";

import Slant from "../../svg/slant";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  return (
    <div className="relative w-full h-screen min-h-screen">
      <div className="relative z-30 flex items-center w-full h-full ">
        <div className="mx-16">
          <h1 className="max-w-xl font-serif text-5xl font-light text-gray-50">
            Financial Security for High-Net-Worth Families
          </h1>
          <span className="block my-4 text-xl font-light text-gray-50">
            Decide where you want to go in life and{" "}
            {referToWe ? "we'll " : "I'll "} help you create a plan to get
            there.
          </span>
          <Link href="#">
            <a>
              <button className="my-8 border rounded-md border-gray-50 text-gray-50 hover:bg-primary-700">
                <p className="block m-4 text-xl font-light">
                  Learn How I Help HNW Families
                </p>
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <div className="absolute top-0 z-20 w-full h-full bg-primary-900 opacity-90"></div>
        <Image
          src="/images/castle.jpeg"
          objectFit="cover"
          layout="fill"
          className="absolute top-0 z-10"
          alt="page background"
        />

        <div className="absolute top-0 right-0 z-20 h-full w-96 opacity-90">
          <Slant />
        </div>
      </div>
    </div>
  );
}
