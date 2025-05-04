# Use the official Node.js image as the base
FROM node:20.19.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose the frontend port (Vite default is 5173)
EXPOSE 5173

# Start the frontend server
CMD ["npm", "run", "dev"]