// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { GoogleSpreadsheet } = require("google-spreadsheet");

type Data = {
  primaryColor: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const doc = new GoogleSpreadsheet(
    "19PJUnp_EE-9a21R2RxsI_yu_owei4AkltgiIJdV175s"
  );

  console.log(doc);

  res.status(200).json({ primaryColor: "cyan" });
}
