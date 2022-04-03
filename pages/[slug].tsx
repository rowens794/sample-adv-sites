import type { NextPage } from "next";
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
import Demo from "../components/subheroSections/DemoSite";

interface Props {
  slug: string;
  firm: string;
  disclosure: string;
  bio1Name: string;
  bio1Title: string;
  bio1Photo: string;
  bio1Phone: string;
  bio1Email: string;
  bio2Name: string;
  bio2Title: string;
  bio2Photo: string;
  bio2Phone: string;
  bio2Email: string;
  bio3Name: string;
  bio3Title: string;
  bio3Photo: string;
  bio3Phone: string;
  bio3Email: string;
}

const index = (props: Props) => {
  let firmSize = 1;
  if (props.bio2Name !== "") firmSize = 2;

  return (
    <div className="min-h-screen ">
      <Head>
        <title>Waiting</title>
        <meta
          name="description"
          content="I build custom websites for financial advisors with no upfront costs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen">
        <Navigation />
        <Hero referToWe={firmSize > 1} res={props} />
        <Experience referToWe={firmSize > 1} res={props} />
        <WhatWeDo referToWe={firmSize > 1} res={props} />
        {/* <SubHeroSectionOne /> */}
        <Fiduciary referToWe={firmSize > 1} res={props} />
        <FeeOnly referToWe={firmSize > 1} res={props} />
        <Independendent referToWe={firmSize > 1} res={props} />
        {props.bio1Name && props.bio2Name ? (
          <Team />
        ) : (
          <SingleBio res={props} />
        )}
        <Footer res={props} referToWe={firmSize > 1} />
      </main>
      <Demo referToWe={firmSize > 1} res={props} />
    </div>
  );
};

export default index;

export async function getServerSideProps(context: any) {
  // const res = await fetch(
  //   `https://api.sheety.co/de8bd41567f1ba178beb77f6905c5775/advisorApi/sheet1?filter[slug]=clearcreek-financial-group`
  // );
  // let parsedRes = await res.json();

  let parsedRes = {
    slug: "commercial-trust-financial-services",
    firm: "Commercial Trust Financial Services",
    disclosure:
      "Securities and advisory services offered through LPL Financial, a registered investment advisor. Member FINRA/SIPC.  Insurance products offered through LPL Financial or its licensed affiliates.  The investment products sold through LPL Financial are not insured Commercial Trust Company deposits and are not FDIC insured.  These products are not obligations of the Commercial Trust Company and are not endorsed, recommended or guaranteed by Commercial Trust Company or any government agency.  The value of the investment may fluctuate, the return on the investment is not guaranteed, and loss of principal is possible.Commercial Trust Company and Commercial Trust Financial Services are not registered broker/dealers and are not affiliated with LPL Financial. **The LPL Financial registered representatives of Commercial Trust Financial Services may only discuss and/or transact securities business with residents of the following states: AR, CA, CO, FL, MO, OK",
    bio1Name: "Kyle Elliot",
    bio1Title: "Financial Advisor",
    bio1Photo: "/images/kyle.elliot.png",
    bio1Phone: "660-248-2222",
    bio1Email: "kyle.elliott@lpl.com",
    bio1Blurb:
      "As an experienced professional, I can help provide clarity to your financial objectives and direction toward your goals. My guidance is delivered with a level of integrity and reliability that keeps your needs at the forefront. As an independent firm, I have no proprietary products to sell and no sales quotas to meet, which means you receive recommendations that are unbiased. ** I welcome the opportunity to speak with you about your needs and objectives and the potential benefits of working with Commercial Trust Financial Services.",
    bio2Name: "",
    bio2Title: "",
    bio2Photo: "",
    bio2Phone: "",
    bio2Email: "",
    bio3Name: "",
    bio3Title: "",
    bio3Photo: "",
    bio3Phone: "",
    bio3Email: "",
    totalProfessional: 4,
  };

  return {
    props: parsedRes, // will be passed to the page component as props
  };
}
