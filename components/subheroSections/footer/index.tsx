import React from "react";
import Link from "next/link";

import {
  PhoneIcon,
  BriefcaseIcon,
  IdentificationIcon,
  NewspaperIcon,
  HomeIcon,
} from "@heroicons/react/outline";

type Props = {
  res: any;
  referToWe: boolean;
  setOpen: any;
};

export default function index({ res, referToWe, setOpen }: Props) {
  let splitDisclosure = res.disclosure.split("**");

  const handleClick = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <footer className="bg-white">
      <div className="relative grid max-w-6xl grid-cols-1 px-8 py-16 m-auto lg:px4 md:py-24 lg:grid-cols-2 ">
        <div>
          {splitDisclosure.map((item: string, i: number) => {
            return (
              <p className="py-2 text-sm font-light text-gray-500" key={i}>
                {item}
              </p>
            );
          })}
        </div>

        <div className="hidden py-6 sm:grid sm:grid-cols-2 md:visible ">
          <div>
            <p className="w-full text-center underline lg:text-right">
              Who {referToWe ? "We" : "I"} Serve
            </p>
            <ul>
              <BulletItem name="HNW Families" />
              <BulletItem name="Corporations" />
              <BulletItem name="Retirement Plans" />
              <BulletItem name="Nonprofits" />
            </ul>
          </div>

          <div className="">
            <p className="w-full pt-8 text-center underline sm:pt-0 lg:text-right">
              Site Links
            </p>
            <ul>
              {navSections
                .filter((item) => {
                  return item.type !== "CTA";
                })
                .map((link) => {
                  return (
                    <LinkItem
                      name={link.title}
                      href={link.href}
                      key={link.title}
                      onClick={handleClick}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl px-8 py-8 m-auto text-right lg:px4 ">
        <LinkItemTwo name="Terms & Conditions" href="#" onClick={handleClick} />
        <LinkItemTwo
          name="Privacy and Security Center"
          href="#"
          onClick={handleClick}
        />
        <FileDownloadLink
          name="Firm Brochure Adv Part 2A"
          href="/documents/ADV-Part2.pdf"
        />
        <FileDownloadLink name="Form CRS" href="/documents/CRS.pdf" />
      </div>
    </footer>
  );
}

const LinkItem = ({
  name,
  href,
  onClick,
}: {
  name: string;
  href: string;
  onClick: any;
}) => {
  return (
    <li className="py-2 font-light text-center text-gray-700 lg:text-right hover:cursor-pointer">
      {/* <Link href={href}> */}
      <a
        onClick={(e) => onClick(e)}
        className="hover:text-primary-600 hover:underline"
      >
        {name}
      </a>
      {/* </Link> */}
    </li>
  );
};

const BulletItem = ({ name }: { name: string }) => {
  return (
    <li className="py-2 font-light text-center text-gray-700 lg:text-right">
      {name}
    </li>
  );
};

let LinkItemTwo = ({
  name,
  href,
  onClick,
}: {
  name: string;
  href: string;
  onClick: any;
}) => {
  return (
    <Link href={href}>
      <a
        onClick={(e) => onClick(e)}
        className="inline-block px-4 text-xs text-gray-500 hover:cursor-pointer"
      >
        {name}
      </a>
    </Link>
  );
};

let FileDownloadLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <a
      className="inline-block px-4 text-xs text-gray-500 hover:cursor-pointer"
      href={href}
      download={name}
    >
      {name}
    </a>
  );
};

const navSections = [
  {
    title: "Home",
    href: "#",
    type: "link",
    icon: HomeIcon,
  },
  {
    title: "About",
    href: "#",
    type: "link",
    icon: IdentificationIcon,
  },
  {
    title: "Team",
    href: "#",
    type: "link",
    icon: BriefcaseIcon,
  },
  {
    title: "Process",
    href: "#",
    type: "link",
    icon: NewspaperIcon,
  },
  {
    title: "Contact",
    href: "#",
    type: "CTA",
    icon: PhoneIcon,
  },
];
