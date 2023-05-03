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

# Install Vue.js
RUN npm install vue

# Copy the vue.html file to the container
COPY vue.html .

# Modify index.ts to serve the vue.html file
RUN sed -i 's|app\.get('/',|app.get('/vue',|' newindex.js

# Start the app
#CMD ["npm", "start"]
CMD ["node", "newindex.js"]

