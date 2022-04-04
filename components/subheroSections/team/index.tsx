import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slant from "../../svg/slantgray";

type Props = { res: any; setOpen: any };

export default function index({ res, setOpen }: Props) {
  let teamSize = 2;
  if (res.bio3Name !== "") teamSize = 3;

  const handleClick = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <div className="relative my-8 bg-gray-100 md:my-16">
      <Slant />

      <div
        className={`py-8 bg-gray-100 md:py-16 mx-auto px-4 ${
          teamSize === 3 ? "max-w-5xl" : "max-w-3xl"
        }`}
      >
        <h2 className="w-full max-w-xl font-serif text-4xl font-light text-primary-800">
          Our Team
        </h2>
        <div
          className={`grid w-full max-w-4xl grid-cols-1 m-auto my-8 sm:grid-cols-2  ${
            teamSize === 3 ? "md:grid-cols-3" : ""
          }`}
        >
          <Member
            name={res.bio1Name}
            title={res.bio1Title}
            photo={res.bio1Photo}
            link={"#"}
            handleClick={handleClick}
          />
          <Member
            name={res.bio2Name}
            title={res.bio2Title}
            photo={res.bio2Photo}
            link={"#"}
            handleClick={handleClick}
          />
          {res.bio3Name !== "" ? (
            <Member
              name={res.bio3Name}
              title={res.bio3Title}
              photo={res.bio3Photo}
              link={"#"}
              handleClick={handleClick}
            />
          ) : null}
        </div>

        {res.totalProfessionals > 3 ? (
          <div className="w-full text-right">
            <a onClick={(e) => handleClick(e)}>
              <button className="border rounded-md border-primary-800 text-primary-800 hover:bg-gray-200">
                <p className="block m-4 text-lg font-light lg:text-xl">
                  Meet Our Full Team
                </p>
              </button>
            </a>
          </div>
        ) : null}
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
    // <Link href={link} key={name}>
    <a
      className="relative mx-auto my-4 text-center"
      onClick={(e: any) => handleClick(e)}
    >
      <div
        className="relative overflow-hidden rounded-sm"
        style={{ width: "250px", height: "350px" }}
      >
        <Image
          className="z-30 grayscale"
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
    // </Link>
  );
};
