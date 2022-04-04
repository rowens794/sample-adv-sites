import React from "react";

type Props = {};

export default function slant({}: Props) {
  return (
    <svg
      className="absolute top-0 right-0 w-32 h-full opacity-25 md:w-64 lg:w-full lg:opacity-30"
      viewBox="0 0 600 800"
      version="1.1"
      id="slantbox"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="slant"
        className="fill-primary-700 "
        d="M 400,0 H 600 V 800 H 160 Z"
      />
    </svg>
  );
}
