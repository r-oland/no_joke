/* eslint-disable import/no-unresolved */
import type { NextApiRequest, NextApiResponse } from 'next';
import { parseBody } from 'next-sanity/webhook';

export { config } from 'next-sanity/webhook';

const routes = ['/'];

export default async function revalidate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );
    if (isValidSignature === false) {
      const message = 'Invalid signature';
      console.log(message);
      return res.status(401).send(message);
    }

    if (typeof body._id !== 'string' || !body._id) {
      const invalidId = 'Invalid _id';
      console.error(invalidId, { body });
      return res.status(400).send(invalidId);
    }

    await Promise.all(routes.map((route) => res.revalidate(route)));

    const updatedRoutes = `Updated routes: ${routes.join(', ')}`;
    console.log(updatedRoutes);
    return res.status(200).send(updatedRoutes);
  } catch (err: any) {
    console.error(err);
    return res.status(500).send(err.message);
  }
}
