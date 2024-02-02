# Use an official Node runtime as a parent image
FROM node:20.11.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm ci --omit=dev

COPY ./src ./src

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
# ENV NAME World

# Run app.js when the container launches
# CMD npm start 
CMD npm start

