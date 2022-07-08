// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prismaClient = new PrismaClient();

  res.status(200).json(await prismaClient.user.findMany());
}
