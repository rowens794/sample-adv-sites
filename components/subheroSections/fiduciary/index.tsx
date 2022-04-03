import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  return (
    <div className="flex flex-row max-w-5xl gap-12 py-32 mx-auto ">
      <div className="relative flex items-center">
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
          <h2 className="max-w-xl font-serif text-4xl font-light text-primary-800">
            Fiduciary Relationship
          </h2>
          <p className="block my-4 text-lg font-light text-gray-700">
            As a fiduciary, {referToWe ? "We are " : "I am"} legally bound to
            place your interests above {referToWe ? "our " : "my"} own.
          </p>
          <p className="block my-4 text-lg font-light text-gray-700">
            {referToWe ? "We" : "I"} believe that you should never have to worry
            that decisions being made on your behalf are motivated by anything
            other than helping you reach your goals.
          </p>
          <p className="block my-4 text-lg font-light text-gray-700">
            A fiduciary standard is the highest standard that an investment
            advisor can be held to.
          </p>
        </div>
      </div>
    </div>
  );
}
