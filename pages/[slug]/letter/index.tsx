import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="min-w-full min-h-screen py-12 bg-gray-100 lg:py-24">
      <div className="max-w-2xl px-4 mx-auto text-gray-800">
        <Link href={`/${props.slug}`}>
          <a className="underline text-primary-700 hover:text-primary-800">
            {`<--`} Back to Demo Site
          </a>
        </Link>
        <p className="mt-8 mb-4 font-light">{name},</p>
        <p className="my-4 font-light">
          Thanks for checking out the sample homepage. I know it is coming
          unsolicited, but I hope that seeing the image you could be presenting
          online has piqued your interest.
        </p>
        <p className="my-4 font-light">
          There are a number of issues that this redesign would address:
        </p>
        <ul className="ml-8">
          <li className="font-light text-gray-800 list-decimal">
            present a more modern, credible online presence for your practice
          </li>
          <li className="font-light text-gray-800 list-decimal">
            create compelling lead capture calls-to-action
          </li>
          <li className="font-light text-gray-800 list-decimal">
            better target local organic search keywords
          </li>
          <li className="font-light text-gray-800 list-decimal">
            fix existing issues with site speed / on-page SEO / accessibility /
            https
          </li>
        </ul>
        <p className="my-4 font-light">
          All of which are important in order to generate new business.
        </p>
        <p className="my-4 font-light">
          Creating a website that speaks to the value of your services is more
          important than ever. Over the last 5 years, online search for
          financial advisors has increased by more than 700%.
        </p>
        <p className="text-sm font-bold text-center ">
          Frequency of search term
        </p>
        <p className="text-sm font-bold text-center ">
          &#34;financial advisors near me&#34;
        </p>
        <Image
          src="/images/search-term.png"
          width={700}
          height={300}
          alt="google search trends"
        />
        <p className="m-0 text-xs italic font-light text-right text-gray-500">
          source:{" "}
          <a
            className="text-right underline light text text-primary-500"
            href="https://trends.google.com/trends/explore?q=financial%20advisors%20near%20me&date=all&geo=US"
          >
            Google Trends
          </a>
        </p>
        <p className="my-4 font-light">
          If you&#39;d like to chat about making a change - I&#39;d be more than
          happy to have a conversation. Here&#39;s a link to my{" "}
          <a
            className="text-primary-700 hover:text-primary-800"
            href="https://calendly.com/ryanjowens/30min"
          >
            calendar
          </a>
          .
        </p>
        <p className="mt-8 mb-4 font-light">Best,</p>
        <p className="my-4 font-light">Ryan</p>
        <p className="font-light ">(304) 247-1817</p>
        <p className="font-light ">ryan@webpagesthatconvert.com</p>
        <a
          className="font-light text-primary-700 hover:text-primary-800 "
          href="www.webpagesthatconvert.com"
        >
          www.webpagesthatconvert.com
        </a>
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
