import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  res: any;
  referToWe: boolean;
};

export default function index({ res, referToWe }: Props) {
  let name = res.bio1Name.split(" ");
  return (
    <div className="fixed bottom-0 left-0 z-50 py-3 pl-4 pr-12 border-t-2 border-r-2 border-red-700 rounded-tr-full bg-red-50">
      <div className="">
        <p className="text-sm font-semibold text-red-700">
          This is a Demo Site
        </p>
        <p className="text-sm font-light text-gray-600">
          {name[0]}, I wrote you a letter:{" "}
          <Link href={`/${res.slug}/letter`}>
            <a className="font-bold underline text-primary-700">LINK</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
