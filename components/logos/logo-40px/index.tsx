import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: string
  title: string
  image: string
  alt: string
}

export default function index({ href, title, image, alt }: Props) {
  return (
    <Link href={href}>
      <a>
        <span className="sr-only">{title}</span>
        <svg
          width="40"
          height="40"
          viewBox="0 0 132.29167 132.29167"
          version="1.1"
          id="svg5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs id="defs2" />
          <rect
            className="fill-primary-600 opacity-70"
            id="rect1006"
            width="72.550056"
            height="72.550056"
            x="-17.108881"
            y="63.708817"
            transform="matrix(0.55931958,-0.82895211,0.55931958,0.82895211,0,0)"
          />
          <rect
            className="fill-primary-600 opacity-70"
            id="rect2368"
            width="72.550056"
            height="72.550056"
            x="-83.622498"
            y="17.078379"
            transform="matrix(0.13347032,-0.99105281,0.86904055,0.49474087,0,0)"
          />
          <rect
            className="fill-primary-600 opacity-70"
            id="rect2370"
            width="72.550056"
            height="72.550056"
            x="49.008839"
            y="81.975754"
            transform="matrix(0.85535619,-0.51804033,0.16019824,0.98708486,0,0)"
          />
        </svg>
      </a>
    </Link>
  )
}
