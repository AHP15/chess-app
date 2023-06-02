import express from 'express';
import { PrismaClient } from '@prisma/client';

import path from 'path';

const app = express()
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use(express.json());

const prisma = new PrismaClient();
async function main() {
  const allUsers = await prisma.user.findMany();
  /* eslint-disable no-console */
  console.log('All users', allUsers);
}
main();

app.post('/api/v1/auth/signup', (req, res) => {
  console.log(req.body);
  res.status(201).send({...req.body});
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});
export default app;
