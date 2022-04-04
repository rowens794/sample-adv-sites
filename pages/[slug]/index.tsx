import { useState, useEffect } from "react";
import Head from "next/head";
const { google } = require("googleapis");

import Navigation from "../../components/nav/centered-header-transparent";
import Hero from "../../components/heros/hero";
import Experience from "../../components/subheroSections/experience";
import WhatWeDo from "../../components/subheroSections/whatWeDo";
import Independendent from "../../components/subheroSections/independent";
import FeeOnly from "../../components/subheroSections/FeeOnly";
import Fiduciary from "../../components/subheroSections/fiduciary";
import Team from "../../components/subheroSections/team";
import SingleBio from "../../components/subheroSections/singleBio";
import Footer from "../../components/subheroSections/footer";
import Demo from "../../components/DemoSite";
import Modal from "../../components/modal";

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

export default function Index(props: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  let firmSize = 1;
  if (props.bio2Name !== "") firmSize = 2;

  return (
    <div className="min-h-screen ">
      <Head>
        <title>{props.firm}</title>
        <meta
          name="description"
          content="I build custom websites for financial advisors with no upfront costs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal open={modalOpen} setOpen={setModalOpen} res={props} />

      <main className="relative min-h-screen ">
        <Navigation setOpen={setModalOpen} res={props} />
        <Hero referToWe={firmSize > 1} res={props} setOpen={setModalOpen} />
        <Experience referToWe={firmSize > 1} res={props} />
        <WhatWeDo referToWe={firmSize > 1} res={props} setOpen={setModalOpen} />
        <Fiduciary referToWe={firmSize > 1} res={props} />
        <FeeOnly referToWe={firmSize > 1} res={props} />
        <Independendent referToWe={firmSize > 1} res={props} />
        {props.bio1Name && props.bio2Name ? (
          <Team res={props} setOpen={setModalOpen} />
        ) : (
          <SingleBio res={props} setOpen={setModalOpen} />
        )}
        <Footer res={props} referToWe={firmSize > 1} setOpen={setModalOpen} />
      </main>
      <Demo referToWe={firmSize > 1} res={props} />
    </div>
  );
}

export async function getStaticProps(ctx: any) {
  let row = await getFirmRow(ctx.params.slug);
  let values = null;
  if (row) {
    values = await getFirmValues(row);
  }

  return {
    props: values,
  };
}

export async function getStaticPaths() {
  let paths = await getPaths();

  return {
    paths: paths,
    fallback: false,
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
      obj[item] = data.data.values[0][i] ? data.data.values[0][i] : "";
    });

    resolve(obj);
  });
};

const getPaths = (): Promise<string[]> => {
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
        const paths: string[] = [];

        rows.forEach((row: string[], i: number) => {
          if (i > 0) paths.push(`/${row}`);
        });
        resolve(paths);
      }
    );
  });
};
