import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  return (
    <div className="flex flex-col-reverse max-w-5xl gap-12 px-4 py-16 mx-auto md:flex-row md:py-32">
      <div className="relative flex items-center mx-auto">
        <div className="bg-gray-400 h-[300px] w-[300px]" />

        {/* <Image
          src="/images/client-meeting.jpg"
          alt="client meeting"
          layout="fill"
          objectFit="cover"
          className="z-10 transform object-right-middle "
        /> */}
      </div>

      <div className="relative flex items-center ">
        <div className="">
          <h2 className="max-w-xl font-serif text-3xl font-light md:text-4xl text-primary-800">
            Independent Investment Selection
          </h2>
          <p className="block my-4 text-lg font-light text-gray-700">
            {referToWe ? "Our" : "My"} clients are the only stakeholders{" "}
            {referToWe ? "we are" : "I'm"} beholden to.
          </p>
          <p className="block my-4 text-lg font-light text-gray-700">
            {referToWe ? "We don't" : "I don't"} face pressure to utilize
            proprietary products in {referToWe ? "our" : "my"} client&#39;s
            portfolios.
            {referToWe ? " We aren't" : " I'm not"} forced to fit{" "}
            {referToWe ? "our" : "my"} clients into one-size-fits-all models.
            {referToWe ? " We" : " I"} only exist because{" "}
            {referToWe ? "our" : "my"} clients trust {referToWe ? "us" : "me"}{" "}
            to make the best possible decisions on their behalf.
          </p>
        </div>
      </div>
    </div>
  );
}
