# syntax=docker/dockerfile:1

# Set Node.js version
ARG NODE_VERSION=20.8.1

# Use Node.js base image
FROM node:${NODE_VERSION}-alpine

# Use production node environment by default
ENV NODE_ENV production

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source files into the image
COPY . .

# Expose the port that the application listens on
EXPOSE 5001

# Run the application
CMD ["npm", "start"]
