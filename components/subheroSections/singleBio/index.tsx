import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slant from "../../svg/slantgray";

type Props = { res: any; setOpen: any };

export default function index({ res, setOpen }: Props) {
  let splitBio = res.bio1Blurb.split("**");

  const handleClick = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="relative px-4 my-8 bg-gray-100 md:my-16">
      <Slant />

      <div className="max-w-5xl py-16 mx-auto ">
        <h2 className="w-full max-w-xl font-serif text-3xl font-light md:text-4xl text-primary-800">
          Meet {res.bio1Name}
        </h2>
        <div className="grid w-full grid-cols-1 m-auto my-8 md:grid-cols-2 lg:grid-cols-3">
          <Member
            name={res.bio1Name}
            title={res.bio1Title}
            photo={res.bio1Photo}
            handleClick={handleClick}
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
    </div>
  );
}

const Member = ({
  name,
  title,
  photo,
  link,
  handleClick,
}: {
  name: string;
  title: string;
  photo: string;
  link: string;
  handleClick: any;
}) => {
  return (
    <Link href={link} key={name}>
      <a
        onClick={(e) => handleClick(e)}
        className="relative mx-auto text-center"
      >
        <div
          className="relative overflow-hidden bg-white rounded-sm"
          style={{ width: "250px", height: "350px" }}
        >
          <Image
            className="z-30 grayscale opacity-90"
            objectFit="cover"
            layout="fill"
            src={photo}
            alt={`${name}`}
          />
          <div className="absolute top-0 z-20 w-full h-full bg-primary-800 opacity-20" />
          <div className="absolute top-0 z-10 w-full h-full bg-white opacity-100" />
        </div>
        <div className="absolute z-40 w-48 p-2 text-right bg-gray-600 bottom-2 -right-2 text-gray-50">
          <p className="font-bold">{name}</p>
          <p className="text-sm font-light">{title}</p>
        </div>
      </a>
    </Link>
  );
};
