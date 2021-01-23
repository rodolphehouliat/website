FROM node:12-alpine

COPY . /app
WORKDIR /app
ENV NODE_ENV production
RUN npm install
RUN npm run tailwind
# RUN npm run build
EXPOSE 3000
CMD npm start