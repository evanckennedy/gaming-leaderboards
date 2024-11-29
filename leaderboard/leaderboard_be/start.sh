#!/bin/sh
./wait-for-it.sh postgres:5432 -- npx prisma migrate deploy
npx ts-node prisma/seed.ts
npm start