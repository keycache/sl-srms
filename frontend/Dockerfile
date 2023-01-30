FROM node:18.13-slim


WORKDIR /user/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5173
ENV VITE_API_URL http://localhost:8006/api

CMD ["npm", "run", "dev"]