# Use an official Node.js runtime as a parent image
FROM node:18.19.0-slim

# Install necessary packages
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get install -y dos2unix

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci

# Copy the prisma directory into the container
COPY prisma ./prisma

# Copy the rest of the application code to the working directory
COPY . .

# Convert line endings of shell scripts and make them executable
RUN dos2unix ./start.sh && chmod +x ./start.sh
RUN dos2unix ./wait-for-it.sh && chmod +x ./wait-for-it.sh

# Generate Prisma Client
RUN npx prisma generate

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 8234

# Specify the entry point
ENTRYPOINT ["./start.sh"]