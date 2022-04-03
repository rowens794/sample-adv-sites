import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

type Props = { res: any };

export default function index({ res }: Props) {
  let splitBio = res.bio1Blurb.split("**");

  return (
    <div className="max-w-5xl py-32 mx-auto">
      <h2 className="w-full max-w-xl font-serif text-4xl font-light text-primary-800">
        Meet {res.bio1Name}
      </h2>
      <div className="grid w-full grid-cols-1 m-auto my-8 sm:grid-cols-3">
        <Member
          name={res.bio1Name}
          title={res.bio1Title}
          photo={res.bio1Photo}
          link={`#`}
        />
        <div className="col-span-2 ">
          {splitBio.map((line: string, i: number) => {
            return (
              <p
                key={i}
                className="block my-4 text-lg font-light text-gray-700"
              >
                {line}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Member = ({
  name,
  title,
  photo,
  link,
}: {
  name: string;
  title: string;
  photo: string;
  link: string;
}) => {
  return (
    <Link href={link} key={name}>
      <a className="relative mx-auto text-center">
        <div
          className="relative overflow-hidden bg-white rounded-sm"
          style={{ width: "250px", height: "350px" }}
        >
          <Image
            className="grayscale hover:grayscale-0 opacity-90 hover:opacity-100"
            objectFit="cover"
            layout="fill"
            src={photo}
            alt={`${name}`}
          />
          {/* <div className="absolute top-0 w-full h-full bg-primary-800 opacity-20 hover:hidden" /> */}
        </div>
        <div className="absolute w-48 p-2 text-right bg-gray-600 bottom-2 -right-2 text-gray-50">
          <p className="font-bold">{name}</p>
          <p className="text-sm font-light">{title}</p>
        </div>
      </a>
    </Link>
  );
};
