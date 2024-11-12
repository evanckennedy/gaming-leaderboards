# Build stage
# This stage builds the application and produces the optimized frontend assets
FROM node:18.19.0-slim AS builder
WORKDIR /app
RUN echo "Docker Production"
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

# Production stage 
# This stage creates the production-ready Docker image using Nginx
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]