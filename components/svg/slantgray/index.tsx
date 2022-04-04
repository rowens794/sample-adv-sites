import React from "react";

type Props = {};

export default function slant({}: Props) {
  return (
    <svg
      className="absolute top-0 left-0 h-full w-36 -scale-x-100 opacity-10 lg:opacity-10"
      viewBox="0 0 600 800"
      version="1.1"
      id="slantbox"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="slant"
        className=" fill-gray-800"
        d="M 400,0 H 600 V 800 H 160 Z"
      />
    </svg>
  );
}
