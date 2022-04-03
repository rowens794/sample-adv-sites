import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

type Props = {};

export default function index({}: Props) {
  return (
    <div className="max-w-5xl mx-auto py-32">
      <h2 className=" font-serif text-4xl font-light text-primary-800 max-w-xl w-full ">
        Our Team
      </h2>
      <div className="grid w-full max-w-4xl grid-cols-1 m-auto my-8 sm:grid-cols-2 md:grid-cols-3">
        <Member
          name={"Ben Burns"}
          title={"Founder / Wealth Advisor"}
          photo={"/images/ben-burns-headshot.jpg"}
          link={`/team/ben-burns`}
        />
        <Member
          name={"Mike Hill"}
          title={"Wealth Advisor"}
          photo={"/images/mike-hill-headshot.jpg"}
          link={`/team/mike-hill`}
        />
        <Member
          name={"Ray Hart"}
          title={"Client Success Manager"}
          photo={"/images/raymond-hart-headshot.jpg"}
          link={`/team/raymond-hart`}
        />
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
      <a className="mx-auto text-center relative">
        <div
          className="relative rounded-sm overflow-hidden"
          style={{ width: "250px", height: "350px" }}
        >
          <Image
            className="grayscale"
            objectFit="cover"
            layout="fill"
            src={photo}
            alt={`${name}`}
          />
          <div className="w-full h-full bg-primary-800 absolute top-0 opacity-20" />
        </div>
        <div className="absolute bottom-2 -right-2 bg-gray-600 text-right p-2 text-gray-50 w-48">
          <p className="font-bold">{name}</p>
          <p className="text-sm font-light">{title}</p>
        </div>
      </a>
    </Link>
  );
};
