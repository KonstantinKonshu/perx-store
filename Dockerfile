
FROM node:20.10.0-alpine as build

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install
COPY .env.example .env

COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80