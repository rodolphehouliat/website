FROM node:buster-slim

COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
ENV NODE_ENV production
RUN npm run tailwind
EXPOSE 3000
CMD npm run start