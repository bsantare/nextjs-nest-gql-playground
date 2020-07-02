import { NextApiRequest, NextApiResponse } from 'next';

// A simple example for clearing preview mode for static pages manually from your browser.
// Open /api/clearPreview from your browser to invoke.
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData();
  res.end('Preview mode disabled');
};
