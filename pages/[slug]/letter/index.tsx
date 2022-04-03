import React from "react";
import Link from "next/link";

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
  let name = props.bio1Name.split(" ").slice(0, 1);

  return (
    <div className="min-w-full min-h-screen pt-24 bg-gray-100">
      <div className="max-w-2xl mx-auto text-gray-800">
        <Link href={`/${props.slug}`}>
          <a className="underline text-primary-700 hover:text-primary-800">
            {" "}
            {`<--`} Back to Demo Site
          </a>
        </Link>
        <p className="mt-8 mb-4 font-light">{name},</p>
        <p className="my-4 font-light">
          Thanks for checking out the homepage I put together for you. While
          this is obviously just a shot in the dark at what I could build for
          you, I wanted to give you something tangible to interact with - with
          copy/graphics that relate to your practice.
        </p>
        <p className="my-4 font-light">
          While the content and page stucture here is malleable, there is a
          strategy behind everything on the page. From targeting organic search
          queries (google/bing) that you could rank for locally, to actively
          directing traffic to lead capture content, to ensuring we are
          answering common questions users commonly have when they arrive at an
          advisor&#39;s website. All of the content has a role.
        </p>
      </div>
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
