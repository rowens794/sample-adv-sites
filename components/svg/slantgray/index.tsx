import React from "react";

type Props = {};

export default function slant({}: Props) {
  return (
    <svg
      className="absolute top-0 left-0 w-36 h-full -scale-x-100"
      viewBox="0 0 600 800"
      version="1.1"
      id="slantbox"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="slant"
        className="fill-primary-800 opacity-100"
        d="M 400,0 H 600 V 800 H 160 Z"
      />
    </svg>
  );
}
