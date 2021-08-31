// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type IResponse = {
  code: number,
  data: Record<string, any>,
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  const { title, data } = JSON.parse(req.body);
  fs.writeFile(`${path.resolve(__dirname, '../../../../public/files')}/${title}`, data, 'utf-8', function (err) {
    console.log(err);
  });
  res.status(200).json({ code: 0, data: { success: true } });
}
