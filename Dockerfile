FROM node:16-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install yarn && yarn install

COPY . .

EXPOSE 3000

CMD yarn dev