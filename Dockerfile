FROM node:12-alpine

COPY . /app
WORKDIR /app
RUN npm install
ENV NODE_ENV production
RUN npm run tailwind
RUN npm run build
EXPOSE 3000
CMD npm start