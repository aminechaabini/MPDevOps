FROM node:latest

COPY package.json /app/

COPY public /app/

COPY server.js /app/

WORKDIR /app

RUN npm install 

CMD ["npm", "start"]