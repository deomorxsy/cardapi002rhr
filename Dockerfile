# base image
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
#RUN npm run build
RUN npx tsc

# Set environment variable
ENV NODE_ENV production

# Expose port 3000
EXPOSE 3000

# Start the app
#CMD ["npm", "start"]
CMD ["node", "newindex.js"]

