import React from "react";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="grid transform scale-90 bg-gray-100 border-2 border-gray-200 rounded-lg w-96">
      <div className="flex flex-row items-center py-2">
        <div className="w-16 h-16 mx-2 bg-gray-200 rounded-md">
          <img
            src="/images/check-mark.svg"
            className="scale-110 translate-x-2 -translate-y-2"
          />
        </div>
        <p className="px-4 font-serif text-lg font-bold leading-5 text-gray-600">
          Duty of Loyalty
        </p>
      </div>
      <div className="flex flex-row items-center py-2">
        <div className="w-16 h-16 mx-2 bg-gray-200 rounded-md">
          <img
            src="/images/check-mark.svg"
            className="scale-110 translate-x-2 -translate-y-2"
          />
        </div>{" "}
        <p className="px-4 font-serif text-lg font-bold leading-5 text-gray-600">
          Obligation of Good Faith
        </p>
      </div>
      <div className="flex flex-row items-center py-2">
        <div className="w-16 h-16 mx-2 bg-gray-200 rounded-md">
          <img
            src="/images/check-mark.svg"
            className="scale-110 translate-x-2 -translate-y-2"
          />
        </div>{" "}
        <p className="px-4 font-serif text-lg font-bold leading-5 text-gray-600">
          Best Interest Imperative
        </p>
      </div>
    </div>
  );
}
