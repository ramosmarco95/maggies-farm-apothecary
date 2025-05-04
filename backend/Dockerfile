# Use the official Node.js image as the base
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the backend server with nodemon for development
CMD ["npm", "run", "dev"]
