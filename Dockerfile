FROM node:16 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Use a smaller Node.js image for the production environment
FROM node:16-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package*.json ./

# Install only production dependencies
RUN npm install --production

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "dist/server.js"]
