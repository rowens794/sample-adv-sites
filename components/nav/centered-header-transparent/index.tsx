import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import {
  PhoneIcon,
  BriefcaseIcon,
  IdentificationIcon,
  NewspaperIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

import Logo from "../../logos/logo-40px";

export default function Index() {
  let [atTopOfPage, setAtTopOfPage] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setAtTopOfPage(false);
      } else {
        setAtTopOfPage(true);
      }
    });
  });

  return (
    <Popover
      className={` fixed top-0 z-50 w-full  ${
        !atTopOfPage ? " bg-primary-800 shadow-md" : null
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          {/* Logo Section */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Logo
              href="/"
              title="Basic Website"
              image="/images/logo.svg"
              alt="Serving our Customers"
            />
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-white rounded-md bg-primary-400 hover:bg-primary-500 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          {/* Primary Nav Buttons Desktop */}
          {navSections
            .filter((item) => {
              return item.type === "link";
            })
            .map((item, i) => {
              return (
                <Link href={item.href} key={i}>
                  <a className="hidden text-base font-light text-white hover:text-primary-200 md:block">
                    {item.title}
                  </a>
                </Link>
              );
            })}

          {/* Right Hand Menu Group */}
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            {navSections
              .filter((item) => {
                return item.type === "CTA";
              })
              .map((item, i) => {
                return (
                  <Link href={item.href} key={i}>
                    <a className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-light bg-transparent border rounded-md shadow-sm border-gray-50 text-gray-50 whitespace-nowrap hover:bg-primary-700">
                      {item.title}
                    </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      {/* Primary Nav Buttons Mobile / Tablet */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 right-0 w-full p-2 transition origin-top-right transform xs:w-80 md:hidden "
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-black divide-gray-50 ring-1 ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Logo
                  href="/"
                  title="Basic Website"
                  image="/images/logo.svg"
                  alt="Serving our Customers"
                />
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-2">
                  {navSections
                    .filter((item) => {
                      return item.type === "link";
                    })
                    .map((item, i) => {
                      return (
                        <Link href={item.href} key={i}>
                          <a className="flex p-2 rounded-sm hover:bg-gray-100">
                            <item.icon
                              className="flex-shrink-0 w-6 h-6 text-primary-600"
                              aria-hidden="true"
                            />
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.title}
                            </span>
                          </a>
                        </Link>
                      );
                    })}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div>
                {navSections
                  .filter((item) => {
                    return item.type === "CTA";
                  })
                  .map((item, i) => {
                    return (
                      <Link href={item.href} key={i}>
                        <a className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border rounded-md shadow-sm border-gray-50 whitespace-nowrap bg-primary-800 hover:bg-primary-900">
                          {item.title}
                        </a>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

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
    title: "The Service",
    href: "#",
    type: "link",
    icon: BriefcaseIcon,
  },
  {
    title: "Portfolio",
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
