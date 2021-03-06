import React from "react";
import Link from "next/link";
import Image from "next/image";
const { google } = require("googleapis");

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
          There are a number of issues that this redesign would address, it
          would:
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
        <p className="my-4 font-light">Ryan Owens, CFA</p>
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
  let row = await getFirmRow(context.params.slug);
  let values = null;
  if (row) {
    values = await getFirmValues(row);
  }

  return {
    props: values,
  };
}

const getFirmRow = (slug: string): Promise<number> => {
  return new Promise((resolve, rej) => {
    const sheets = google.sheets({ version: "v4" });
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: "19PJUnp_EE-9a21R2RxsI_yu_owei4AkltgiIJdV175s",
        range: "Sheet1!A:A",
        key: process.env.GOOGLE_KEY,
      },
      (err: any, res: any) => {
        const rows = res.data.values;

        let index = 0;
        rows.forEach((row: string[], i: number) => {
          if (row[0] === slug) index = i;
        });
        resolve(index + 1);
      }
    );
  });
};

const getFirmValues = (row: number) => {
  return new Promise(async (resolve, reject) => {
    const sheets = google.sheets({ version: "v4" });

    let header = await sheets.spreadsheets.values.get({
      spreadsheetId: "19PJUnp_EE-9a21R2RxsI_yu_owei4AkltgiIJdV175s",
      range: `Sheet1!A${1}:Z${1}`,
      key: process.env.GOOGLE_KEY,
    });

    let data = await sheets.spreadsheets.values.get({
      spreadsheetId: "19PJUnp_EE-9a21R2RxsI_yu_owei4AkltgiIJdV175s",
      range: `Sheet1!A${row}:Z${row}`,
      key: process.env.GOOGLE_KEY,
    });

    let obj: { [key: string]: string } = {};

    header.data.values[0].forEach((item: string, i: number) => {
      obj[item] = data.data.values[0][i];
    });

    resolve(obj);
  });
};
