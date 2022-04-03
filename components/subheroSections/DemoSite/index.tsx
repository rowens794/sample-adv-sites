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
    <div className="fixed bottom-0 left-0 p-4 bg-red-400 rounded-tr-full w-96">
      <div className="mt-4">
        <p className="text-lg font-semibold text-white">
          This is a Demonstration Site
        </p>
        <p className="text-lg font-light text-white">
          {name[0]}, I wrote you a letter:{" "}
          <Link href={`/${res.slug}/letter`}>
            <a className="font-bold underline text-primary-300">LINK</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
