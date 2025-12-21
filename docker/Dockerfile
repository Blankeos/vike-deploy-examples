FROM oven/bun:1.3.5-debian AS base
# FROM node:22.17.1-debian AS base # Or if using Node

# Create an app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Run the bun install
RUN bun install

# Bundle app source
COPY . ./

# Build the app
RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "preview"]
