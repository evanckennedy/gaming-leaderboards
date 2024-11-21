#!/bin/sh
./wait-for-it.sh postgres:5432 -- npx prisma migrate deploy
npm start