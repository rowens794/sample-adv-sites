import React from "react";
import Image from "next/image";
import Link from "next/link";

import Slant from "../../svg/slant";

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
    <div className="relative w-full h-screen min-h-screen">
      <div className="relative z-30 flex items-center w-full h-full ">
        <div className="mx-16">
          <h1 className="max-w-xl font-serif text-3xl font-light lg:text-5xl text-gray-50">
            Financial Security for High-Net-Worth Families
          </h1>
          <span className="block my-4 text-lg font-light lg:text-xl text-gray-50">
            Decide where you want to go in life and{" "}
            {referToWe ? "we'll " : "I'll "} help you create a plan to get
            there.
          </span>
          <a onClick={(e) => handleClick(e)}>
            <button className="my-8 border rounded-md border-gray-50 text-gray-50 hover:bg-primary-700">
              <p className="block m-4 text-lg font-light lg:text-xl">
                Learn How {referToWe ? "We " : "I "} Help HNW Families
              </p>
            </button>
          </a>
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
          blurDataURL="/images/castle-sm.jpg"
          placeholder="blur"
        />

        <div className="absolute top-0 right-0 z-20 h-full w-96 opacity-90">
          <Slant />
        </div>
      </div>
    </div>
  );
}
