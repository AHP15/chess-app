import express from 'express';
import { PrismaClient } from '@prisma/client';

import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

const prisma = new PrismaClient();
async function main() {
  const allUsers = await prisma.user.findMany();
  console.log('All users', allUsers);
}
main();

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});
export default app;