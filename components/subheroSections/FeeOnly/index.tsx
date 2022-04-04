import React from "react";
import Image from "next/image";
import Link from "next/link";

import FeeOnly from "../../../components/graphics/FeeOnly";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  return (
    <div className="flex flex-col max-w-5xl gap-12 px-4 py-16 mx-auto md:py-32 md:flex-row">
      <div className="relative flex items-center ">
        <div className="">
          <h2 className="max-w-xl font-serif text-3xl font-light md:text-4xl text-primary-800">
            Fee-Only Compensation Structure
          </h2>
          <p className="block my-4 text-lg font-light text-gray-700">
            Forget hidden transaction fees and under the table compensation
            arrangements. Each new relationship begins with a clear indication
            of how {referToWe ? "our" : "my"} service fees will be charged.
          </p>
          <p className="block my-4 text-lg font-light text-gray-700">
            You will never have to second guess whether trades are generating
            excess commissions or an investment was chosen because of a
            lucrative sales fee. The only compensation
            {referToWe ? " we " : " I "}
            recieve comes directly from {referToWe ? "our" : "my"} clients.
          </p>
        </div>
      </div>

      <div className="relative flex items-center mx-auto">
        <FeeOnly />
      </div>
    </div>
  );
}
