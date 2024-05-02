#build the Node application
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 4000
#CMD ["npm", "run", "start"]
CMD ["node", "index.js"]