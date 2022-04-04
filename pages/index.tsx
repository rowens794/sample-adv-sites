import type { NextPage } from "next";
import { Fragment, useState } from "react";
import Head from "next/head";

import Navigation from "../components/nav/centered-header-transparent";
import Hero from "../components/heros/hero";
import Experience from "../components/subheroSections/experience";
import WhatWeDo from "../components/subheroSections/whatWeDo";
import Independendent from "../components/subheroSections/independent";
import FeeOnly from "../components/subheroSections/FeeOnly";
import Fiduciary from "../components/subheroSections/fiduciary";
import Team from "../components/subheroSections/team";
import SingleBio from "../components/subheroSections/singleBio";
import Footer from "../components/subheroSections/footer";
import Demo from "../components/DemoSite";
import Modal from "../components/modal";

export default function Index() {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>No Content</title>
        <meta
          name="description"
          content="I build custom websites for financial advisors with no upfront costs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>No Page Content</p>
    </div>
  );
}
