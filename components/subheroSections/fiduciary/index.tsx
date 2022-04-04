import React from "react";
import Image from "next/image";
import Link from "next/link";

import FiduciaryDuty from "../../../components/graphics/fiduciaryDuty";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  return (
    <div className="flex flex-col-reverse max-w-5xl gap-12 px-4 py-16 mx-auto md:py-32 md:flex-row">
      <div className="relative flex items-center mx-auto">
        <FiduciaryDuty />
      </div>

      <div className="relative flex items-center ">
        <div className="">
          <h2 className="max-w-xl font-serif text-3xl font-light md:text-4xl text-primary-800">
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
