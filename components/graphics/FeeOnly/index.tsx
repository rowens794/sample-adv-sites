import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/outline";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="grid transform scale-90 bg-gray-100 border-2 border-gray-200 rounded-lg w-96">
      <div className="flex flex-row items-center py-2">
        <div className="w-16 h-16 mx-2 bg-gray-200 rounded-md">
          <CheckIcon
            className="w-24 h-24 -translate-x-2 -translate-y-5 text-primary-700"
            aria-hidden="true"
          />
        </div>
        <p className="px-4 text-lg font-bold leading-5 text-gray-600">
          Asset Based Fees
        </p>
      </div>
      <div className="flex flex-row items-center py-2">
        <div className="w-16 h-16 mx-2 bg-gray-200 rounded-md">
          <XIcon className="w-16 h-16 text-red-300 " aria-hidden="true" />
        </div>{" "}
        <p className="px-4 text-lg font-bold leading-5 text-gray-600">
          Commissons on Trades
        </p>
      </div>
      <div className="flex flex-row items-center py-2">
        <div className="w-16 h-16 mx-2 bg-gray-200 rounded-md">
          <XIcon className="w-16 h-16 text-red-300 " aria-hidden="true" />
        </div>{" "}
        <p className="px-4 text-lg font-bold leading-5 text-gray-600">
          Sales Fees (12b-1)
        </p>
      </div>
    </div>
  );
}
