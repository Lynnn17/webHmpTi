FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
# copy semua file
COPY . . 

CMD ["npm", "run", "dev"]