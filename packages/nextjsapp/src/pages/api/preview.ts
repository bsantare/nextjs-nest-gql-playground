import { NextApiRequest, NextApiResponse } from 'next';

// A simple example for testing preview mode for static pages manually from your browser.
// Open /api/preview from your browser.
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setPreviewData({});
  res.end('Preview mode enabled');
};
