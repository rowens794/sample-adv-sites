import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="max-w-5xl mx-auto py-32 flex flex-row justify-between">
      <div className="relative w-[550px] rounded-md shadow-md overflow-hidden">
        <div className="bg-primary-800 absolute top-0 w-full h-full z-20 opacity-30" />
        <Image
          src="/images/client-meeting.jpg"
          alt="client meeting"
          layout="fill"
          objectFit="cover"
          className="object-right-middle transform z-10 "
        />
      </div>

      <div className="relative flex items-center max-w-sm ">
        <div className="">
          <h2 className=" font-serif text-4xl font-light text-primary-800 max-w-xl ">
            Independent, Fee-Only, Fiduciary
          </h2>
          <p className="text-gray-700 font-light text-lg block my-4">
            These are the 3 most important words in the financial advisory
            business.
          </p>
          <p className="text-gray-700 font-light text-lg block my-4">
            Independence means we aren&#39;t here to sell you proprietary
            investments.
          </p>
          <p className="text-gray-700 font-light text-lg block my-4">
            Fee-Only describes the fact that we don&#39;t invest your money in
            products that pay us hidden fees.
          </p>
          <p className="text-gray-700 font-light text-lg block my-4">
            Fiduciary describes a legally binding commitment that we act in your
            best interest.
          </p>
        </div>
      </div>
    </div>
  );
}
