FROM node:18-alpine

# Working directory needs to be set
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
