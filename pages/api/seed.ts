import { db, seedDatabase } from '@/database'
import { Product } from '../../models'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({message: 'Access not allowed to this API'})
  }

  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);
  await db.disconnect();

  res.status(200).json({ message: 'Process successfully done' })
}