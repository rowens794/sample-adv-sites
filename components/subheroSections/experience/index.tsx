import React from "react";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  return (
    <div className="flex flex-row justify-between h-full max-w-4xl py-32 mx-auto">
      <div className="relative flex items-center max-w-sm">
        <div className="">
          <h2 className="max-w-xl font-serif text-4xl font-light text-primary-800">
            Advisory Experience You Can Trust
          </h2>
          <span className="block my-4 text-lg font-light text-gray-700">
            Put your faith in a practice understands you.
          </span>
          <span className="block my-4 text-lg font-light text-gray-700">
            With over two decades of experience working with high-net-worth
            clients, {referToWe ? "We " : "I "} understand the strategies that
            will help you meet and surpass your financial goals.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col p-4">
          <div className="text-6xl font-extrabold text-center text-primary-800">
            <span className="text-4xl font-light text-center align-top text-primary-800">
              $
            </span>
            50
            <span className="text-4xl font-light text-center align-bottom text-primary-800">
              M
            </span>
          </div>

          <span className="text-lg font-light text-center text-gray-500">
            under advisement
          </span>
        </div>

        <div className="flex flex-col p-4">
          <span className="text-6xl font-extrabold text-center text-primary-800">
            25
            <span className="text-4xl font-light text-center align-bottom text-primary-800">
              +
            </span>
          </span>

          <span className="text-lg font-light text-center text-gray-500">
            years experience
          </span>
        </div>

        {referToWe ? (
          <div className="flex flex-col p-4">
            <span className="text-6xl font-extrabold text-center text-primary-800">
              {res.totalProfessionals}
            </span>

            <span className="text-lg font-light text-center text-gray-500">
              Advisory Professionals
            </span>
          </div>
        ) : (
          <div className="flex flex-col p-4">
            <span className="text-6xl font-extrabold text-center text-primary-800">
              40
              <span className="text-4xl font-light text-center align-bottom text-primary-800">
                +
              </span>
            </span>

            <span className="text-lg font-light text-center text-gray-500">
              thrilled clients
            </span>
          </div>
        )}

        <div className="flex flex-col p-4">
          <span className="text-6xl font-extrabold text-center text-primary-800">
            1
          </span>

          <span className="text-lg font-light text-center text-gray-500">
            Fee Structure
          </span>
        </div>
      </div>
    </div>
  );
}
