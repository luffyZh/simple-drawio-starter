// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' });
}

// import type { NextApiRequest, NextApiResponse } from 'next';
// import multer from 'multer';
// import initApiMiddleware from '@/middleware/initApiMiddleware';

// type IResponse = {
//   code: number,
//   data: Record<string, any>,
// }

// const upload = multer();

// // for parsing multipart/form-data
// // note that Multer limits to 1MB file size by default
// const multerFile = initApiMiddleware(
//   upload.any()
// );

// type NextApiRequestWithFormData = NextApiRequest & {
//   files: any[],
// }

// type BlobCorrected = Blob & {
//     buffer: Buffer,
// }

// // Doc on custom API configuration:
// // https://nextjs.org/docs/api-routes/api-middlewares#custom-config
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

// export default async function handler(
//   req: NextApiRequestWithFormData,
//   res: NextApiResponse<IResponse>
// ) {
//   await multerFile(req, res);
//   // This operation expects a single file upload. Edit as needed.
//   if (!req.files?.length || req.files.length > 1) {
//       res.statusCode = 400;
//       res.end();
//       return;
//   }

//   const blob: BlobCorrected = req.files[0];
//   console.log(blob, 111222333);
//   res.status(200).json({ code: 0, data: { success: true } })
// }
