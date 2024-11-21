# Use an official Node.js runtime as a parent image
FROM node:18.19.0-slim

# Install dependencies for 'sed' and 'sh'
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get install -y dos2unix

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Convert line endings of shell scripts and make them executable
RUN dos2unix ./start.sh && chmod +x ./start.sh
RUN dos2unix ./wait-for-it.sh && chmod +x ./wait-for-it.sh

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 8000

# Specify the entry point
ENTRYPOINT ["./start.sh"]